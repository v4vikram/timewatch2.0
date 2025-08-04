"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Download, FileText } from "lucide-react";
import Image from "next/image";

const product = {
  title: "Biometric Attendance System",
  subtitle: "Touchless | Cloud Connected | Secure",
  shortDescription: "Track employee time with high accuracy and ease.",
  description: `The Iris Device stands out as a groundbreaking innovation in attendance tracking. Offering more than just a basic timekeeping solution, it delivers exceptional precision and efficiency, redefining how organizations manage workforce attendance. With advanced features that ensure flawless accuracy, the device simplifies time management, helping businesses streamline operations and reduce administrative workload. Its futuristic technology sets it apart, making it an indispensable tool for companies looking to enhance productivity and control over their workforce, while maintaining reliability and ease of use in their daily operations.`,
  images: ["/uploads/products/device-1.png", "/uploads/products/device-2.png"],
  brochure: "/uploads/products/brochure.pdf",
  specs: [
    { key: "Authentication", value: "Facial + RFID + PIN" },
    { key: "Storage", value: "10,000 users" },
    { key: "Connectivity", value: "WiFi / LAN / USB" },
  ],
  downloads: [
    {
      name: "Product Manual",
      url: "/uploads/manuals/biometric-manual.pdf",
    },
  ],
  features: [
    {
      icon: "/uploads/icons/eye-scan.png",
      label: "3D type eye localization (High resolution Iris image)",
    },
    {
      icon: "/uploads/icons/shield.png",
      label: "Anti Passback",
    },
    {
      icon: "/uploads/icons/tilt.png",
      label: "Auto tilting",
    },
    {
      icon: "/uploads/icons/fake-detection.png",
      label: "Fake detection",
    },
    {
      icon: "/uploads/icons/database.png",
      label: "1,00,000 Iris, 3000 Face Capacity",
    },
    {
      icon: "/uploads/icons/rfid.png",
      label: "RFID & Password Support",
    },
    {
      icon: "/uploads/icons/selfie.png",
      label: "Selfie type user interface",
    },
    {
      icon: "/uploads/icons/optical.png",
      label: "State of the art optical design",
    },
  ],
};

const ProductDetails = () => {
  const [activeImage, setActiveImage] = useState(product?.images?.[0]);

  return (
    <div className="w-[1300px] mx-auto px-4 py-10">
      {/* Top Section */}
      <div className="flex gap-20">
        {/* Image */}
        <div className="w-[550px]">
          <div className="w-[550px] h-[500px] relative bg-gray-50 rounded-lg">
            <Image
              src={"/images/demo-product-image.jpg"}
              fill
              sizes="400"
              alt={product.title}
              className="w-full h-full p-15 object-contain"
            />
          </div>
        </div>

        {/* Details */}
        <div className="space-y-4 flex-1">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          {/* <p className="text-lg text-muted-foreground">{product.subtitle}</p> */}
          <p className="text-gray-600">{product.description}</p>

          {/* Features Section */}
          {product.features && (
            <div className="mt-2">
              <h2 className="text-2xl font-bold mb-3">Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-1 flex flex-col items-center text-center hover:shadow transition"
                  >
                    <div className="w-[50px] h-[50px] relative">
                      <Image
                        src={"/images/demo-feature.png"}
                        alt={feature.label}
                        fill
                        sizes="50"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      {feature.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Download Brochure */}
          {product.brochure && (
            <a
              href={product.brochure}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#d63438] text-white rounded-lg shadow hover:bg-[#bb2e31]"
              rel="noreferrer"
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </a>
          )}
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-10">
        <Tabs defaultValue="specs" className="w-full">
          <TabsList>
            {/* <TabsTrigger value="description">Description</TabsTrigger> */}
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
          </TabsList>

          <TabsContent value="specs">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              {product.specs?.map((item, index) => (
                <li key={index}>
                  <strong>{item.key}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="specs">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              {product.specs?.map((item, index) => (
                <li key={index}>
                  <strong>{item.key}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="downloads">
            <div className="space-y-4">
              {product.downloads?.map((file, index) => (
                <a
                  key={index}
                  href={file.url}
                  target="_blank"
                  className="flex items-center gap-2 text-[#d63438] hover:underline"
                  rel="noreferrer"
                >
                  <FileText className="w-4 h-4" />
                  {file.name}
                </a>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetails;
