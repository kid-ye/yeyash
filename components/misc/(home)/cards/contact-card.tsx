"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Mail } from "lucide-react";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { submitForm } from "@/lib/submit-form";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email.")
    .max(64),
  message: z.string().max(1500, {
    message: "Max 1500 characaters, if you need more please send me an email.",
  }),
});

const ContactCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast("Message sent!", {
      description: "Thanks, I'll get back to you ASAP.",
      action: {
        label: "Undo",
        onClick: () => console.log("implement undo function"),
      },
    });
    const { email, message } = values;
    submitForm(email, message);
    form.reset(
      {
        email: "",
        message: "",
      },
      {
        keepValues: false,
      },
    );
  }

  return (
    <div
      id="contact"
      className="mt-8 w-full min-h-72 scroll-mt-24 rounded-2xl border border-white/10 bg-text/[0.03] p-4 shadow-[0_0_24px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all hover:border-text/20 hover:bg-text/5 dark:shadow-[0_0_24px_rgba(255,255,255,0.04)]"
    >
      <Form {...form}>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Mail className="size-4 text-text/70" />
            <p className="font-semibold text-lg">Drop a message</p>
          </div>
          <p className="text-sm text-text/60">
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="my-4 h-px w-full bg-text/10" />
        <div>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="email"
                      className="h-10 border-white/10 bg-background/60 focus-visible:border-text/40 focus-visible:ring-text/20 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-2 flex gap-3 w-full">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="your message here"
                        className="h-28 w-full resize-none border-white/10 bg-background/60 focus-visible:border-text/40 focus-visible:ring-text/20 focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-3 flex justify-end">
              <Button
                type="submit"
                variant="outline"
                className="h-10 w-36 border-text/20 bg-text/10 text-text shadow-sm transition-all hover:border-text/40 hover:bg-text/15 hover:shadow-[0_0_16px_rgba(255,255,255,0.08)]"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </Form>
    </div>
  );
};

export default ContactCard;
