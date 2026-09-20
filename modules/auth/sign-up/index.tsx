import { SignupForm } from "../components/signup-form"
import Image from "next/image"
import { assets } from "@/lib/assets"
import WobbleLogo from "@/components/wobbble-logo"

export default function SignUp() {
  return (
    <div className="grid h-svh lg:grid-cols-2 overflow-hidden">
      <div className="flex flex-col gap-4 p-6 md:p-10 overflow-y-auto scrollbar-none">
        <div className="flex justify-center gap-2">
          <WobbleLogo
            width={150}
            height={75}
            color="lab(40.4273% 67.2623 53.7441)"
          />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md px-1">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={assets.default.signup}
          alt="Image"
          width={1920}
          height={1080}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
