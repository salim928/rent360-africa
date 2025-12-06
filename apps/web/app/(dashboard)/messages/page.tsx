"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Send } from "lucide-react";
import { useState } from "react";

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState("1");

  // Sample conversations
  const conversations = [
    {
      id: "1",
      name: "John Doe",
      avatar: "",
      lastMessage: "Hi, is the apartment still available?",
      timestamp: "10:30 AM",
      unread: 2,
      listing: "Modern 2BR Apartment",
    },
    {
      id: "2",
      name: "Jane Smith",
      avatar: "",
      lastMessage: "Thank you for the quick response!",
      timestamp: "Yesterday",
      unread: 0,
      listing: "Toyota Camry 2020",
    },
    {
      id: "3",
      name: "Michael Johnson",
      avatar: "",
      lastMessage: "When can I schedule a viewing?",
      timestamp: "2 days ago",
      unread: 1,
      listing: "Modern 2BR Apartment",
    },
  ];

  // Sample messages
  const messages = [
    {
      id: "1",
      senderId: "2",
      text: "Hi, is the apartment still available?",
      timestamp: "10:25 AM",
    },
    {
      id: "2",
      senderId: "1",
      text: "Yes, it's still available! Would you like to schedule a viewing?",
      timestamp: "10:27 AM",
    },
    {
      id: "3",
      senderId: "2",
      text: "That would be great. What times work for you this week?",
      timestamp: "10:30 AM",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-muted-foreground">
          Chat with potential renters and hosts
        </p>
      </div>

      {/* Messages Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardContent className="p-4">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search messages..." className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedChat === conv.id
                      ? "bg-primary/10"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setSelectedChat(conv.id)}
                >
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src={conv.avatar} />
                      <AvatarFallback>
                        {conv.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-sm truncate">
                          {conv.name}
                        </h4>
                        <span className="text-xs text-muted-foreground">
                          {conv.timestamp}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">
                        {conv.listing}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground truncate">
                          {conv.lastMessage}
                        </p>
                        {conv.unread > 0 && (
                          <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                            {conv.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat View */}
        <Card className="lg:col-span-2">
          <CardContent className="p-0">
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center gap-3">
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-muted-foreground">
                  About: Modern 2BR Apartment
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 h-[400px] overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.senderId === "1" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.senderId === "1"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.senderId === "1"
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input placeholder="Type a message..." />
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
