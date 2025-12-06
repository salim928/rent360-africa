"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MessageCircle, Shield } from "lucide-react";
import { getInitials } from "@rent360/utils";

interface HostCardProps {
  hostId: string;
  name: string;
  avatar?: string;
  rating?: number;
  reviewCount?: number;
  isVerified?: boolean;
  joinedDate?: string;
  responseRate?: number;
  responseTime?: string;
}

export function HostCard({
  hostId,
  name,
  avatar,
  rating,
  reviewCount,
  isVerified = false,
  joinedDate,
  responseRate,
  responseTime,
}: HostCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg">Hosted by {name}</h3>
              {isVerified && (
                <Badge className="bg-primary gap-1">
                  <Shield className="h-3 w-3" />
                  Verified
                </Badge>
              )}
            </div>
            {rating && (
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{rating.toFixed(1)}</span>
                {reviewCount && (
                  <span className="text-muted-foreground">
                    ({reviewCount} reviews)
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {responseRate && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Response rate:</span>
              <span className="font-medium">{responseRate}%</span>
            </div>
          )}
          {responseTime && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Response time:</span>
              <span className="font-medium">{responseTime}</span>
            </div>
          )}
          {joinedDate && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Joined:</span>
              <span className="font-medium">{joinedDate}</span>
            </div>
          )}
        </div>

        <Button className="w-full gap-2">
          <MessageCircle className="h-4 w-4" />
          Contact Host
        </Button>
      </CardContent>
    </Card>
  );
}
