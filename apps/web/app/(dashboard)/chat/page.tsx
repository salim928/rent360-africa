import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Paperclip, Smile } from "lucide-react";

export default function ChatPage() {
  return (
    <div className="p-8">
      <Card className="h-[calc(100vh-200px)] flex">
        <div className="w-80 border-r flex flex-col">
          <div className="p-4 border-b">
            <Input placeholder="Search messages..." />
          </div>
          <div className="flex-1 overflow-y-auto">
            {[
              { name: "John Mensah", msg: "Is the apartment still available?", time: "2m ago", unread: 2 },
              { name: "Sarah Osei", msg: "Thank you for the great service!", time: "1h ago", unread: 0 },
            ].map((conv, i) => (
              <div key={i} className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${i === 0 ? 'bg-gray-50' : ''}`}>
                <div className="flex gap-3">
                  <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600">
                    {conv.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <span className="font-medium truncate">{conv.name}</span>
                      <span className="text-xs text-gray-500">{conv.time}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <p className="text-sm text-gray-600 truncate">{conv.msg}</p>
                      {conv.unread > 0 && (
                        <Badge className="bg-orange-500 text-white">{conv.unread}</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b">
            <div className="font-medium">John Mensah</div>
            <div className="text-xs text-green-600">Online</div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex justify-start">
              <div className="max-w-[70%] bg-gray-100 rounded-lg p-3">
                <p className="text-sm">Hi! Is the Modern Apartment in East Legon still available?</p>
                <span className="text-xs text-gray-500 mt-1 block">10:30 AM</span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[70%] bg-orange-500 text-white rounded-lg p-3">
                <p className="text-sm">Yes, it's available! Would you like to schedule a viewing?</p>
                <span className="text-xs text-orange-100 mt-1 block">10:32 AM</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Input placeholder="Type a message..." className="flex-1" />
              <Button variant="ghost" size="sm">
                <Smile className="h-5 w-5" />
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
