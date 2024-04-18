import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function markdown(string) {
  const target = string[0];
  const trimSize = /^\s+/.exec(string)[0].length;
  return target
    .split("\n")
    .map((line) => line.substr(trimSize - 1))
    .join("\n");
}

export default {
  introspection: {
    type: "sdl",
    paths: [path.join(__dirname, "/schemas/**/*.graphql")],
  },
  website: {
    template: "carbon-multi-page",
    staticAssets: path.join(__dirname, "/assets"),
    options: {
      siteRoot: "/britania-signature-service-document",
      appFavicon:
        "https://origin-public-asset.s3.ap-southeast-1.amazonaws.com/origin-assets/favicon.ico",
      appLogo:
        "https://origin-public-asset.s3.ap-southeast-1.amazonaws.com/origin-service-assets/britaniaSignatureService.png",
      pages: [
        {
          title: "Introduction",
          content: [
            {
              title: "Welcome",
              content: markdown`
# 👋 API Britania Signature Service

It is a GraphQL API, and you can use the interactive documentation below to try it out.

## 🌍 Hosting

This API is hosted on [Origin](https://serviceapi.myorigin.net/graphql).

## 🔑 Authentication

This API is currently open to the public.

You will need to authenticate yourself to use it.

To do so, you will need to provide an [API Key](/introduction/authentication) in the Authorization header.
              `,
            },
            {
              title: "Authentication",
              content: markdown`
# 🔒 Authentication

| Key           | Value | Desctription   |
| ------------- | ----- | -------------- |
| Authorization | #     | Bearer [Token] |
| x-user        | #     | userId         |
| x-member      | #     | memberId       |
              `,
            },
          ],
        },
        {
          title: "Examples",
          content: [
            {
              title: "GraphQL Request",
              content: markdown`
# GraphQL Request

## 📦 Installation

<br>

~~~bash
pnpm add graphql-request
~~~

<br>

## 📝 Usage

<br>

~~~javascript
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://serviceapi.myorigin.net/graphql", {
  headers: {
    Authorization: "Bearer [Token]",
    "x-user": "userId",
    "x-member": "memberId",
  },
});

const query = \`query {
  example {
    id
  }
}\`;

async function main() {
  const data = await client.request(query);
  console.log(data);
}

main().catch(console.error);
~~~
              `,
            },
            {
              title: "CURL Request",
              content: markdown`
# CURL Request

<br>

## 📝 Usage

<br>

~~~bash
curl --location --request POST 'https://serviceapi.myorigin.net/graphql' \
--header 'Authorization: Bearer [Token]' \
--header 'x-user: userId' \
--header 'x-member: memberId' \
--data-raw '{
  "query": "query {
    example {
      id
    }
  }"
}'
~~~
              `,
            },
          ],
        },
      ],
    },
  },
  dev: {
    watch: [
      path.join(__dirname, "/docs"),
      path.join(__dirname, "/schemas/**/*.graphql"),
    ],
  },
};
