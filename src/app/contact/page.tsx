'use client'
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Card from "@/components/Card";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  const ContactSection = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event: any) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      formData.append("access_key", "ea4bed9a-4bd2-4e85-a08f-6f58ad623054");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        toast.success("Message sent successfully!");
      } else {
        console.error("Error", data);
        setResult(data.message);
        toast.error("Failed to send message.");
      }
    };

    return (
      <section id="contact" className="my-12 py-24 relative overflow-x-clip">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="container mx-auto px-4 flex flex-col items-center gap-12 md:gap-8 md:flex-row md:justify-between md:items-start">
          {/* Left Side: Text Content */}
          <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left space-y-4 mt-20">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
            <p className="uppercase font-semibold text-sm tracking-wider bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
              Let&apos;s Connect
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-100 leading-tight">
              Reach Out to Me
            </h2>
            <p className="text-white mt-2 md:text-lg lg:text-xl leading-relaxed max-w-lg">
              I&apos;m currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-8">
              <a href="https://github.com/vanessasara" target="_blank" rel="noopener noreferrer">
                <span className="text-white">
                  <GitHubLogoIcon className="w-6 h-6" />
                </span>
              </a>
              <a href="https://linkedin.com/in/venisasara" target="_blank" rel="noopener noreferrer">
                <span className="text-white">
                  <LinkedInLogoIcon className="w-6 h-6" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Side: Shadcn Card Component */}
          <div className="flex justify-center items-center">
            <Card className="w-[300px] sm:w-[400px] lg:w-[500px]">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl uppercase font-semibold tracking-wider bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Contact Us</CardTitle>
                <CardDescription className="text-lg md:text-xl">Send Your Project Requirements.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit}>
                  <input type="hidden" name="subject" value="New Contact Form Submission" />

                  <div className="grid w-full items-center gap-8">
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="name" className="text-white">Name</label>
                      <input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="border border-[#33353F] placeholder-[#9CA2A9] bg-transparent text-white text-sm rounded-lg block w-full p-3"
                      />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="email" className="text-white">Email</label>
                      <input
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        type="email"
                        className="border border-[#33353F] placeholder-[#9CA2A9] bg-transparent text-white text-sm rounded-lg block w-full p-3"
                      />
                    </div>

                    <div className="flex flex-col space-y-1.5 gap-4">
                      <label htmlFor="message" className="text-white">Project Description</label>
                      <Textarea
                        name="message"
                        placeholder="Describe your project..."
                        required
                        className="border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg w-full p-3 mt-4"
                      />
                    </div>
                  </div>

                </form>
                <span className="text-white mt-2">{result}</span>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
                <button
                  type="button"
                  className="border border-primary-500 text-white px-3 sm:px-4 py-2 rounded-lg w-full sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border border-primary-500 bg-gradient-to-r from-emerald-300 to-sky-400 text-black px-3 sm:px-4 py-2 rounded-lg w-full sm:w-auto"
                >
                  Send Message
                </button>
              </CardFooter>

            </Card>
          </div>
        </div>
      </section>
    );
  };

  return <ContactSection />;
};

export default Page;
