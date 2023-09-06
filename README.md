# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

To add or edit content, edit the pages as follows:

## Blog posts

All the blog posts are here:

https://github.com/maggie44/hivehealing/tree/main/blog

Create a new folder in the same format as the others. Then add a file in to it called index.md (like in the other ones). And in there you can write the blog content. It uses “markdown” which allows you to add things like headers, images, stuff like that. ChatGPT can help with markdown, or plenty of info on Google.

## About, events and services pages

These are all here (you can ignore the other files in the folder):

https://github.com/maggie44/hivehealing/tree/main/src/pages

## Descriptions and titles on the front page

https://github.com/maggie44/hivehealing/blob/main/src/components/HomepageFeatures/index.js

This page looks more complicated, but if sticking to just changing the descriptions and titles then should be fine.

## Front page title and sub-title

This is the bit that says ‘The Hive - The place where we …’.

Find the entries `title:` and `tagline`, and edit the content between the quotation marks.

https://github.com/maggie44/hivehealing/blob/main/docusaurus.config.js

## Example content:

```
---
slug: example
title: Example
authors: [healinghive]
tags: [tags, go, here]
---

Blog content to show as preview here.

<!--truncate-->

Rest of the blog content.
```
