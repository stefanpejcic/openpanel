import nock from "nock";

nock("https://flowing-mammal-24.hasura.app:443", { encodedQueryParams: true })
    .post("/v1/graphql", {
        query: "query ($id: uuid!) { posts_by_pk (id: $id) { id, title, content, category { id } } }",
        variables: { id: "6379bbda-0857-40f2-a277-b401ea6134d7" },
    })
    .reply(
        200,
        [
            "1f8b08000000000000033cce318ec3201040d1aba0a9c3ca066c6c777b896dadc18c231402c40c91a2c8778fd26cf9a557fc37786484e50d2557aeab7bade5f6cde0618151dbd9398fb29b062b4db72b89ca5ae94cd7138ebd36dec20538702458e0971261122df211b64055a49c440c8e8e2c6a608177625128464a4cf5d1082eb0e5c4941816f8a3cac1b5d8eee2d962698c4ca2620994041e5bfbf96a64bae6e3f57f48caf6c3b86939cff3248d36bb747e7052b9ce4e6ad2fbae4638cff3fc000000ffff0300d3bd6b9ee9000000",
        ],
        [
            "Date",
            "Fri, 04 Aug 2023 11:34:58 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "1ead1aa1cc0eb61cd866c57ffb2a3930",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7f167e872c3f5488-IST",
            "Content-Encoding",
            "gzip",
        ],
    );

nock("https://flowing-mammal-24.hasura.app:443", { encodedQueryParams: true })
    .post("/v1/graphql", {
        query: "query ($id: Int!) { users_by_pk (id: $id) { id, name, email } }",
        variables: { id: 1 },
    })
    .reply(
        200,
        [
            "1f8b0800000000000003aa564a492c4954b2aa562a2d4e2d2a8e4faa8c2fc80671335394ac0c7594f212735395ac948252d332f352957494527313337394ac944094431158542f25b54ca9b6b616000000ffff0300b4eb714f4b000000",
        ],
        [
            "Date",
            "Fri, 04 Aug 2023 11:34:59 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "960d4bbdf6c8e67b69edd13cad0d6ee2",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7f167e89d9d592dd-IST",
            "Content-Encoding",
            "gzip",
        ],
    );

nock("https://flowing-mammal-24.hasura.app:443", { encodedQueryParams: true })
    .post("/v1/graphql", {
        query: "query ($id: Int!) { users_by_pk (id: $id) { id, name, email } }",
        variables: { id: 1 },
    })
    .reply(
        200,
        [
            "1f8b0800000000000003aa564a492c4954b2aa562a2d4e2d2a8e4faa8c2fc80671335394ac0c7594f212735395ac948252d332f352957494527313337394ac944094431158542f25b54ca9b6b616000000ffff0300b4eb714f4b000000",
        ],
        [
            "Date",
            "Fri, 04 Aug 2023 11:34:59 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "7322fdc9bb7d7cc6f29b7092471a1261",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7f167e8b5d5792d5-IST",
            "Content-Encoding",
            "gzip",
        ],
    );

nock("https://flowing-mammal-24.hasura.app:443", { encodedQueryParams: true })
    .post("/v1/graphql", {
        query: "query ($id: uuid!) { posts_by_pk (id: $id) { id, title, content, category { id } } }",
        variables: { id: "6379bbda-0857-40f2-a277-b401ea6134d7" },
    })
    .reply(
        200,
        [
            "1f8b08000000000000033cce318ec3201040d1aba0a9c3ca066c6c777b896dadc18c231402c40c91a2c8778fd26cf9a557fc37786484e50d2557aeab7bade5f6cde0618151dbd9398fb29b062b4db72b89ca5ae94cd7138ebd36dec20538702458e0971261122df211b64055a49c440c8e8e2c6a608177625128464a4cf5d1082eb0e5c4941816f8a3cac1b5d8eee2d962698c4ca2620994041e5bfbf96a64bae6e3f57f48caf6c3b86939cff3248d36bb747e7052b9ce4e6ad2fbae4638cff3fc000000ffff0300d3bd6b9ee9000000",
        ],
        [
            "Date",
            "Fri, 04 Aug 2023 11:34:59 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "8d69391a2ee044fd92097754c580c6b6",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7f167e8cbc4892d8-IST",
            "Content-Encoding",
            "gzip",
        ],
    );

nock("https://ruling-redbird-23.hasura.app:443", { encodedQueryParams: true })
    .post("/v1/graphql", {
        query: "query ($id: uuid!) { postsByPk (id: $id) { id, title, content, category { id } } }",
        variables: { id: "6379bbda-0857-40f2-a277-b401ea6134d7" },
    })
    .reply(
        200,
        [
            "1f8b08000000000000033cceb16ec3201080e15739dd1c2a1bb0b1bdb54f90a9fb61ce152a01c71c91a2c8ef5e65e9f84bdff0bf3090102e2fdc4b95faf5bcfebe23065c70346ef63e90eaa6c129db6d5a91764e79dbf54c636f6c70784189921817fce4cc94a12539e21ab9422e1952f47c14a851806e2cb0734a9c85ebbd315e702d59380b2ef8cd55a26fa9dde0d1d2de8484a1d21e39031d6bfb786b12fe29c7f3ff90b5eb8771356a9ee749596337e5c3e095f69d9bf464b64d8f789ee7f9070000ffff0300c1cd4319e7000000",
        ],
        [
            "Date",
            "Fri, 04 Aug 2023 11:35:00 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "3c46ed29e0bdcd659766352aec64590d",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7f167e8e2c8b5488-IST",
            "Content-Encoding",
            "gzip",
        ],
    );

nock("https://ruling-redbird-23.hasura.app:443", { encodedQueryParams: true })
    .post("/v1/graphql", {
        query: "query ($id: Int!) { usersByPk (id: $id) { id, name, email } }",
        variables: { id: 1 },
    })
    .reply(
        200,
        [
            "1f8b0800000000000003aa564a492c4954b2aa562a2d4e2d2a76aa0cc80671325394ac0c7594f212735395ac948252d332f352957494527313337394ac944094431158542f25b54ca9b6b616000000ffff0300450073ea49000000",
        ],
        [
            "Date",
            "Fri, 04 Aug 2023 11:35:00 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "d07368aa9b4ac4f1f0551c1b099d98a3",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7f167e931c1a92cf-IST",
            "Content-Encoding",
            "gzip",
        ],
    );

nock("https://ruling-redbird-23.hasura.app:443", { encodedQueryParams: true })
    .post("/v1/graphql", {
        query: "query ($id: Int!) { usersByPk (id: $id) { id, name, email } }",
        variables: { id: 1 },
    })
    .reply(
        200,
        [
            "1f8b0800000000000003aa564a492c4954b2aa562a2d4e2d2a76aa0cc80671325394ac0c7594f212735395ac948252d332f352957494527313337394ac944094431158542f25b54ca9b6b616000000ffff0300450073ea49000000",
        ],
        [
            "Date",
            "Fri, 04 Aug 2023 11:35:00 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "cb85b1f923bf09c0ab478b3be6978cc9",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7f167e953d545481-IST",
            "Content-Encoding",
            "gzip",
        ],
    );

nock("https://ruling-redbird-23.hasura.app:443", { encodedQueryParams: true })
    .post("/v1/graphql", {
        query: "query ($id: uuid!) { postsByPk (id: $id) { id, title, content, category { id } } }",
        variables: { id: "6379bbda-0857-40f2-a277-b401ea6134d7" },
    })
    .reply(
        200,
        [
            "1f8b08000000000000033cceb16ec3201080e15739dd1c2a1bb0b1bdb54f90a9fb61ce152a01c71c91a2c8ef5e65e9f84bdff0bf3090102e2fdc4b95faf5bcfebe23065c70346ef63e90eaa6c129db6d5a91764e79dbf54c636f6c70784189921817fce4cc94a12539e21ab9422e1952f47c14a851806e2cb0734a9c85ebbd315e702d59380b2ef8cd55a26fa9dde0d1d2de8484a1d21e39031d6bfb786b12fe29c7f3ff90b5eb8771356a9ee749596337e5c3e095f69d9bf464b64d8f789ee7f9070000ffff0300c1cd4319e7000000",
        ],
        [
            "Date",
            "Fri, 04 Aug 2023 11:35:01 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "3f47087bee74c4e30fef8324d52ce1f2",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7f167e98397a92dd-IST",
            "Content-Encoding",
            "gzip",
        ],
    );
