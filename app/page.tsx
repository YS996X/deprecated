"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FocusFlow404() {
  const [currentTime, setCurrentTime] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted relative overflow-hidden">
      {/* Retro scan line effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-0.5 bg-primary/20 scan-line"></div>
      </div>

      {/* Retro taskbar */}
      <div className="fixed bottom-0 left-0 right-0 h-12 bg-card retro-border flex items-center justify-between px-4 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary retro-button flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">FF</span>
          </div>
          <span className="text-sm font-mono">Focus Flow v1.0</span>
        </div>
        <div className="text-sm font-mono">{currentTime}</div>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="max-w-2xl w-full retro-border bg-card p-8 relative">
          {/* Window title bar */}
          <div className="absolute -top-8 left-0 right-0 h-8 bg-primary retro-border flex items-center justify-between px-2">
            <span className="text-primary-foreground font-bold text-sm">Focus Flow - Error</span>
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-yellow-400 retro-button"></div>
              <div className="w-4 h-4 bg-red-500 retro-button"></div>
            </div>
          </div>

          <div className="text-center space-y-8">
            {/* Retro computer icon */}
            <div className="flex justify-center">
              <div className="bounce-slow">
                {/* CRT Monitor with realistic proportions */}
                <div className="w-48 h-40 bg-gray-300 rounded-lg retro-border relative">
                  {/* Monitor bezel */}
                  <div className="absolute inset-2 bg-gray-800 rounded border-2 border-gray-600">
                    {/* Screen with slight curve effect */}
                    <div className="absolute inset-1 bg-black rounded-sm overflow-hidden">
                      {/* Screen content with scanlines */}
                      <div className="w-full h-full bg-gradient-to-b from-green-400 to-green-600 relative">
                        <div className="absolute inset-0 bg-black/20"></div>
                        {/* Terminal-style content */}
                        <div className="p-2 font-mono text-xs text-green-300">
                          <div>C:\&gt; focus-flow.exe</div>
                          <div className="text-red-400">ERROR: File not found</div>
                          <div className="text-yellow-300">Status: DEPRECATED</div>
                          <div className="flicker">_</div>
                        </div>
                        {/* Scanlines effect */}
                        <div
                          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent bg-repeat-y opacity-30"
                          style={{ backgroundSize: "100% 4px" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Monitor controls */}
                  <div className="absolute right-1 top-1/2 transform -translate-y-1/2 space-y-1">
                    <div className="w-2 h-2 bg-gray-600 rounded-full retro-button"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full retro-button"></div>
                  </div>

                  {/* Power LED */}
                  <div className="absolute bottom-2 right-2 w-1 h-1 bg-green-400 rounded-full flicker"></div>
                </div>

                {/* Monitor stand */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-6 bg-gray-300 retro-border rounded-b-lg"></div>
                  <div className="w-24 h-3 bg-gray-400 retro-border rounded-full mx-auto -mt-1"></div>
                </div>

                {/* Floating floppy disk */}
                <div className="absolute -top-4 -right-8 bounce-slow">
                  <div className="w-8 h-8 bg-blue-600 retro-border relative">
                    <div className="absolute top-1 left-1 w-6 h-1 bg-white"></div>
                    <div className="absolute bottom-1 left-1 w-4 h-3 bg-white"></div>
                    <div className="absolute top-1 right-1 w-1 h-1 bg-blue-800"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main message */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary pixel-text">Focus Flow has been deprecated {":("}</h2>

              <div className="bg-muted p-6 retro-border">
                <p className="text-lg font-mono leading-relaxed">
                  However, we made it opensource so you can use it locally! {":)"}
                  <span className={`inline-block ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>█</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  className="retro-button bg-secondary hover:bg-secondary/90 text-secondary-foreground font-mono px-8 py-3"
                  onClick={() => window.open("https://github.com/YS996X/Focus-Flow", "_blank")}
                >
                  📁 Download Source Code
                </Button>

                <Button
                  variant="outline"
                  className="retro-button border-border hover:bg-muted font-mono px-8 py-3 bg-transparent"
                  onClick={() => window.history.back()}
                >
                  ← Go Back
                </Button>
              </div>
            </div>

            {/* Retro footer */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm font-mono text-muted-foreground flicker">Credits: Yuvraj Singh, Om Dwivedi</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
