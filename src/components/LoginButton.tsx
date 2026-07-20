"use client";
import React from "react";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

function LoginButton() {
  function handleClick() {
    console.log("you clicked me");
    redirect("/dashboard");
    // template, page, loading, not-found, layout, error template
  }
  return <Button onClick={handleClick}>Login</Button>;
}

export default LoginButton;
