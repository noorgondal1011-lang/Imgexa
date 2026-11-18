
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imgexa – Free Online Image Compressor, Resizer & Converter",

  description:
    "Explore Imgexa's free online image tools to compress images without losing quality, resize photos, convert PNG to JPG, JPG to PNG and WebP, remove backgrounds and edit multiple images.",

  keywords: [
    "free online image tools",
    "compress image without losing quality online",
    "free image compressor online without signup",
    "reduce image file size without losing quality",
    "compress JPG images online for free",
    "compress PNG images without losing transparency",
    "compress multiple images online at once",
    "reduce photo size for website upload",
    "online image size reducer for JPG and PNG",
    "resize image without losing quality online",
    "free online photo resizer for JPG and PNG",
    "resize image to specific pixels",
    "change image width and height online free",
    "bulk image resizer online free",
    "resize pictures to custom dimensions online",
    "resize photos for website upload",
    "change image dimensions without losing quality",
    "convert PNG to JPG online free",
    "PNG to JPG converter without signup",
    "convert multiple PNG files to JPG online",
    "change PNG image to JPG format online",
    "convert PNG to JPG without losing quality",
    "convert JPG to PNG online free",
    "free JPG to PNG converter without signup",
    "convert multiple JPG images to PNG online",
    "change JPEG image to PNG format online",
    "convert JPG photos to PNG format online",
    "remove background from image online free",
    "free background remover without signup",
    "make image background transparent online",
    "remove white background from product photos",
    "remove background from JPG and PNG images",
    "transparent background maker free online",
    "remove photo background without Photoshop",
    "convert PNG to WebP online free",
    "convert JPG to WebP online without signup",
    "convert images to WebP without losing quality",
    "free online WebP image converter",
    "convert multiple images to WebP online",
    "resize image for Instagram post online free",
    "Instagram story image resizer 1080x1920",
    "resize image for Facebook cover online",
    "resize image for YouTube thumbnail 1280x720",
    "resize LinkedIn banner image online",
    "compress multiple images at once online",
    "resize images for social media platforms",
  ],

  applicationName: "Imgexa",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
