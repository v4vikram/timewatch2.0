"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Download, FileDown, FileText } from "lucide-react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const ProductDetails = ({ product }) => {
  console.log("Product Details:", product);
  if (!product) return null;

  console.log("Rendering Product Details for:", product);

  return (
    <div className="w-[1300px] mx-auto px-4 py-10">
      {/* Top Section */}
      <div className="flex gap-20">
        {/* Main Image */}
        <div className="w-[550px]">
          <div className="w-[550px] h-[500px] relative bg-gray-50 rounded-lg">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/${
                product.productImage || "images/demo-product.png"
              }`}
              fill
              sizes="400px"
              alt={product.productName || "Product title"}
              className="object-contain p-24"
            />
          </div>
        </div>

        {/* Info */}
        <div className="space-y-4 flex-1">
          <h1 className="text-3xl font-bold">{product.productName}</h1>
          <p className="text-gray-600">{product.description}</p>

          {/* Features */}
          {product.features && (
            <div className="mt-2">
              <h2 className="text-2xl font-bold mb-3">Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-2 flex flex-col items-center text-center hover:shadow transition"
                  >
                    <div className="w-[50px] h-[50px] relative">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/${
                          feature.image || "images/demo-product.png"
                        }`}
                        alt={feature.title}
                        fill
                        sizes="50px"
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <h2 className="text-2xl font-bold mb-2 mt-4">Download</h2>
          <div className="flex gap-2">
            {product?.datasheetFile && (
              <Link
                href={
                  process.env.NEXT_PUBLIC_BASE_URL + "/" + product.datasheetFile
                }
                target="_blank"
                download
                className="flex flex-col justify-center w-[10rem] bg-gray-50 rounded-sm p-2 items-center"
              >
                <FileDown className="h-[3rem] w-[3rem] mx-auto text-primary" />
                <p>DataSheet</p>
              </Link>
            )}
            {product?.connectionDiagramFile && (
              <Link
                href={
                  process.env.NEXT_PUBLIC_BASE_URL +
                  "/" +
                  product.connectionDiagramFile
                }
                target="_blank"
                download
                className="flex flex-col justify-center w-[10rem] bg-gray-50 rounded-sm p-2 items-center"
              >
                <FileDown className="h-[3rem] w-[3rem] mx-auto text-primary" />
                <p>Connection Diagram</p>
              </Link>
            )}
            {product?.userManualFile && (
              <Link
                href={
                  process.env.NEXT_PUBLIC_BASE_URL +
                  "/" +
                  product.userManualFile
                }
                target="_blank"
                download
                className="flex flex-col justify-center w-[10rem] bg-gray-50 rounded-sm p-2 items-center"
              >
                <FileDown className="h-[3rem] w-[3rem] mx-auto text-primary" />
                <p>User Manual</p>
              </Link>
            )}
          </div>

          {/* Brochure Download */}
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
        <h2 className="text-3xl font-bold mb-4">Product Specifications</h2>
        <Table>
          <TableCaption>Product Specifications</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Specification</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {product.table.map((row, index) => (
              <TableRow key={index}>
                <TableCell className={"font-semibold text-lg"}>
                  {row.column1}
                </TableCell>
                <TableCell className={"text-lg"}>{row.column2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductDetails;
