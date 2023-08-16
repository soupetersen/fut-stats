import { sendTweet } from "@/actions/sendTweet";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MatchInsight } from "@/types/MatchInsight";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface TweetDialogProps {
  insight?: MatchInsight;
}

export default function TweetDialog({ insight }: TweetDialogProps) {
  const [message, setMessage] = useState(insight?.message ?? "");

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
  }

  async function handleSendTweet() {
    if (message.length === 0) {
      toast.error("O tweet não pode estar vazio!");
    }
    await sendTweet(message);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-6">
          Enviar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[639px]">
        <DialogHeader>
          <DialogTitle>Enviar Tweet</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-row items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Tweet
            </Label>
            <Textarea
              id="name"
              maxLength={240}
              value={message}
              className="col-span-3"
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSendTweet}>Enviar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
