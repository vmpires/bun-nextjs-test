import { Button } from "@/components/ui/button";

export default function HomePage() {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="font-sans text-4xl">
                Your weather, now.
            </h1>
            <div className="flex flex-row justify-center">
                <Button className="w-1/2">
                    Get Started
                </Button>
            </div>
        </div>
    )
  }
