"use client";
import { quizCreationSchema } from "@/schemas/forms/quiz";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { BookOpen, CopyCheck } from "lucide-react";
import { Separator } from "../ui/separator";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoadingQuestions from "../LoadingQuestions";

type Props = {
  topic: string;
};

type Input = z.infer<typeof quizCreationSchema>;

const QuizCreation = ({ topic: topicParam }: Props) => {
  const router = useRouter();
  const [showLoader, setShowLoader] = React.useState(false);
  const [finishedLoading, setFinishedLoading] = React.useState(false);
  const { toast } = useToast();
  const { mutate: getQuestions, isLoading } = useMutation({
    mutationFn: async ({ amount, topic, type }: Input) => {
      const response = await axios.post("/api/game", { amount, topic, type });
      return response.data;
    },
  });

  const form = useForm<Input>({
    resolver: zodResolver(quizCreationSchema),
    defaultValues: {
      topic: topicParam,
      type: "mcq",
      amount: 3,
    },
  });

  const onSubmit = async (data: Input) => {
    setShowLoader(true);
    getQuestions(data, {
      onError: (error) => {
        setShowLoader(false);
        if (error instanceof AxiosError) {
          if (error.response?.status === 500) {
            toast({
              title: "Error",
              description: "Something went wrong. Please try again later.",
              variant: "destructive",
            });
          }
        }
      },
      onSuccess: ({ gameId }: { gameId: string }) => {
        setFinishedLoading(true);
        setTimeout(() => {
          if (form.getValues("type") === "mcq") {
            router.push(`/play/mcq/${gameId}`);
          } else if (form.getValues("type") === "open_ended") {
            router.push(`/play/open-ended/${gameId}`);
          }
        }, 2000);
      },
    });
  };
  form.watch();

  if (showLoader) {
    return <LoadingQuestions finished={finishedLoading} />;
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-evenly py-12 px-8 md:py-40 md:px-20">
      <div className="w-full md:w-1/2 px-4 md:px-8 lg:px-20 mid:object-1 ">
        <Card>
          <CardHeader>
            <CardTitle className="  py-4 text-2xl font-bold text-2xl font-bold border-b-2 border-gray-200">
              Quiz Creation
            </CardTitle>
            <CardDescription className="font-bold text-[16px] py-3 pt-3">
              Choose a topic
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-10"
              >
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Topic</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter a topic" {...field} />
                      </FormControl>
                      <FormDescription>
                        Please provide any topic you would like to be quizzed on
                        here.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Questions</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="How many questions?"
                          type="number"
                          {...field}
                          onChange={(e) => {
                            form.setValue("amount", parseInt(e.target.value));
                          }}
                          min={1}
                          max={10}
                        />
                      </FormControl>
                      <FormDescription>
                        You can choose how many questions you would like to be
                        quizzed on here.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between">
                  <Button
                    variant={
                      form.getValues("type") === "mcq" ? "default" : "secondary"
                    }
                    className={`w-1/2 rounded-none rounded-l-lg bg-white ${
                      form.getValues("type") === "mcq"
                        ? "bg-gradient-to-r from-green-400 to-cyan-500 text-white font-bold "
                        : "text-black"
                    } transition-all`}
                    onClick={() => {
                      form.setValue("type", "mcq");
                    }}
                    type="button"
                  >
                    <CopyCheck className="w-4 h-4 mr-2" /> Multiple Choice
                  </Button>
                  <Separator orientation="vertical" />
                  <Button
                    variant={
                      form.getValues("type") === "open_ended"
                        ? "default"
                        : "secondary"
                    }
                    className={`w-1/2 rounded-none rounded-r-lg bg-white ${
                      form.getValues("type") === "open_ended"
                        ? "bg-gradient-to-r from-green-400 to-cyan-500 text-white font-bold"
                        : "text-black"
                    } transition-all`}
                    onClick={() => form.setValue("type", "open_ended")}
                    type="button"
                  >
                    <BookOpen className="w-4 h-4 mr-2" /> Open Ended
                  </Button>
                </div>
                <Button
                  disabled={isLoading}
                  type="submit"
                  className="bg-gradient-to-r from-green-400 to-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 disabled:opacity-50 hover:from-green-500 hover:to-cyan-600"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>{" "}
      <div className="w-full md:w-1/2 px-4">
        <img
          className="hidden md:block h-96 md:h-96 w-full object-contain object-center"
          src="/filltheform.png"
          alt="Twitter"
        />{" "}
      </div>
    </div>
  );
};

export default QuizCreation;
