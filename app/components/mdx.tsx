import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'

import { Children } from "react";
import { TweetComponent } from './tweet'
import { createBlockquote } from './blockquote'

export function withHeadingId(children : any) {
  return Children.map(children, el => {
    if ("string" === typeof el) {
      const re = /\[#([^\]]+)\]\s*$/m;
      const match = el.match(re);

      if (match && match[1]?.length) {
        return (
          <span className="relative">
            <a
              className={`
                absolute
                px-3
                -left-[2rem]
                invisible
                [span:hover_&]:visible
                font-mono
                font-normal
                text-gray-400
                hover:text-gray-600
                dark:text-gray-500
                dark:hover:text-gray-400
              `}
              href={`#${match[1]}`}
            >
              #
            </a>

            <a
              id={match[1]}
              className={`
              absolute
              -top-[20px]
            `}
            />
            {el.substring(0, match.index)}
          </span>
        );
      }
    }

    return el;
  });
}

function Table({ data } : { data: any }) {
  let headers = data.headers.map((header : any, index : any) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row : any, index : any) => (
    <tr key={index}>
      {row.map((cell : any, cellIndex : any) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}


export function CustomLink({ children, className = "", href, ...props } : any) {
  if (href[0] === "#") {
    return (
      <a
        href={href}
        className={`border-b text-[#111827] border-gray-300 transition-[border-color] hover:border-[#111827] dark:text-white dark:border-gray-500 dark:hover:border-white ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        href={href}
        className={`border-b text-[#111827] border-gray-300 transition-[border-color] hover:border-[#111827] dark:text-white dark:border-gray-500 dark:hover:border-white ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }
}

function RoundedImage(props : any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Code({ children, ...props } : any) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str : any) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

export function createParagraph({ children } : any) {
  return <p className="my-5 [blockquote_&]:my-2 md:font-light font-normal md:text-[1rem] text-[.95rem] leading-relaxed dark:text-[#a3a3a3] text-[#52525b]">{children}</p>;
}

export function H2({ children } : any) {
  return (
    <h2 className="group font-bold text-xl my-8 relative">
      {withHeadingId(children)}
    </h2>
  );
}

export function createOrderList({ children } :any) {
  return <ol className="my-5 list-decimal list-inside">{children}</ol>;
}

export function createUnorderList({ children } : any) {
  return <ul className="my-5 list-none list-inside">{children}</ul>;
}

// we use `[ul_&]` prefix for the <UL> variety
function createListItem({ children } : any) {
  return (
    // [ul_&]:before:text-gray-400
    <li
      className={`
    my-2
    [ul_&]:relative
    [ul_&]:pl-4
    [ul_&]:before:content-['–']
    [ul_&]:before:mr-2
    [ul_&]:before:absolute
    [ul_&]:before:-ml-4
    dark:text-[#a3a3a3] text-[#52525b]
  `}
    >
      {children}
    </li>
  );
}

let components = {
  // h1: createHeading(1),
  h2: H2,
  // h3: createHeading(3),
  // h4: createHeading(4),
  // h5: createHeading(5),
  // h6: createHeading(6),
  ol: createOrderList,
  ul: createUnorderList,
  li: createListItem,
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  Tweet: TweetComponent,
  p: createParagraph,
  blockquote: createBlockquote,
}

export function CustomMDX(props : any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
