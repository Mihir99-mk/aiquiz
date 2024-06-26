"use client";
import { useEffect, useState } from "react";

const ScriptLoader = ({ src, onLoad }: { src: string; onLoad: () => void }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    script.onload = () => {
      onLoad(); // Execute the callback when the script is loaded
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup function to remove the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, [src, onLoad]);

  return null; // ScriptLoader is a utility component, it doesn't render anything
};

interface CustomWindow extends Window {
  botpressWebChat: any; // Adjust the type as per your usage
}

declare const window: CustomWindow;

const BotpressChat = () => {
  const [botpressLoaded, setBotpressLoaded] = useState(false);

  useEffect(() => {
    const initBotpress = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          composerPlaceholder: "Chat with bot",
          botConversationDescription:
            "This chatbot was built surprisingly fast with Botpress",
          botId: "1d02be85-1bc3-4b0a-9936-eab0c0b2ffd1",
          hostUrl: "https://cdn.botpress.cloud/webchat/v1",
          messagingUrl: "https://messaging.botpress.cloud",
          clientId: "1d02be85-1bc3-4b0a-9936-eab0c0b2ffd1",
          webhookId: "3ea78c96-b793-4ba8-828c-231d3cd43b51",
          lazySocket: true,
          themeName: "prism",
          frontendVersion: "v1",
          showPoweredBy: true,
          theme: "prism",
          themeColor: "#2563eb",
        });
        setBotpressLoaded(true);
      } else {
        console.warn("Botpress script not loaded yet.");
      }
    };

    if (!botpressLoaded) {
      initBotpress();
    }
  }, [botpressLoaded]);

  return (
    <>
      {/* {!botpressLoaded && ( */}
      <ScriptLoader
        src="https://cdn.botpress.cloud/webchat/v0/inject.js"
        onLoad={() => {
          console.log("Botpress script loaded.");
          setBotpressLoaded(true);
        }}
      />
      {/* )} */}
    </>
  );
};

export default BotpressChat;
