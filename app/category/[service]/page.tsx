"use client";

import React from "react";
import { useParams } from "next/navigation";
import ServiceUseCasePage from "@/components/redesign/service-use-case";

export default function CategoryPage() {
  const params = useParams();
  const service = params.service as string;

  return <ServiceUseCasePage slug={service} />;
}
