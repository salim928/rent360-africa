"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return (
      <Card className="overflow-hidden">
        <div className="relative h-[500px] bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">No images available</p>
        </div>
      </Card>
    );
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        <div
          className="col-span-4 md:col-span-2 row-span-2 relative h-[400px] overflow-hidden rounded-lg cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={images[0]}
            alt={`${alt} - Main image`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {images.slice(1, 5).map((image, index) => (
          <div
            key={index}
            className="relative h-[196px] overflow-hidden rounded-lg cursor-pointer"
            onClick={() => {
              setCurrentIndex(index + 1);
              setIsOpen(true);
            }}
          >
            <Image
              src={image}
              alt={`${alt} - Image ${index + 2}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            {index === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-semibold">
                  +{images.length - 5} more
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl">
          <div className="relative">
            <div className="relative h-[600px]">
              <Image
                src={images[currentIndex]}
                alt={`${alt} - Image ${currentIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  onClick={previousImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
