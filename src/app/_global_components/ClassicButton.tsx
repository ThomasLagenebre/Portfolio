"use client";
import Link from "next/link";
import React from "react";

export function ClassicButton({children, className, to, type, onClick, variant, blank } : 
              {
                children: React.ReactNode, 
                className?: string, 
                to?:string | undefined
                type: "link" | "button"
                onClick?: () => void
                variant?: string
                blank?: boolean
              }
            ) 
  { 
    if(type === "link" && to){
      return (
        <Link 
  href={to} 
  target={blank ? "_blank" : undefined} 
  className={`py-1 px-2 rounded-md block w-fit ${variant === "primary" ? "bg-secondary hover:bg-transparent border-2 border-secondary" : "border-2 border-secondary bg-transparent hover:bg-secondary hover:text-primary"} ${className}`}
>
  {children}
</Link>
      );
    } else if(type === "button"){
      return (
        <button onClick={onClick} className={`py-1 px-2 rounded-md ${variant === "primary" ? "bg-secondary hover:bg-transparent border-2 border-secondary" : "border-2 border-secondary bg-transparent hover:bg-secondary hover:text-primary"} ${className}`}>{children}</button>
      )
    }
  }
    
