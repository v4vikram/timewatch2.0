# TimeWatch2.0

| Mode                      | Crawlable? | Fast?    | Real-time Content?        | SEO Friendly?                                         |
| ------------------------- | ---------- | -------- | ------------------------- | ----------------------------------------------------- |
| `force-static`            | ✅ Yes      | ✅ Yes    | ❌ No (only at build time) | ✅ Best for fully static content                       |
| `ISR` (with `revalidate`) | ✅ Yes      | ✅ Yes    | ✅ Yes (auto updates)      | ✅ Best for frequently updated but SEO-sensitive pages |
| SSR (`no-store`)          | ✅ Yes      | ❌ Slower | ✅ Real-time               | 🟨 Okay for SEO, but not ideal for performance        |
