import Image from "next/image"
import { Code, Guitar, Quote, Calendar, ExternalLink, Github, Mail, MessageCircle } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"
import Link from "next/link"

export default function Portfolio() {
  const theme = "light"

  return (
    <>
      <ThemeToggle />
      <main className="min-h-screen flex items-center justify-center py-10 px-8">
        <div className="w-full max-w-4xl mx-auto space-y-24">
          <section className="text-center space-y-12">
            <Link href={"/"} className="flex justify-center mb-12">
              <Image
                src={theme === "light" ? "/logo.png" : "/logo-light.png"}
                alt="kecheste logo"
                width={120}
                height={120}
                className="opacity-90 hero-logo cursor-pointer"
              />
            </Link>
            <div className="flex items-center justify-start gap-6 text-4xl font-bold tracking-tight">
              <span className="hero-title">Kecheste <br/>Software developer </span>
              <span className="hero-subtitle text-sm font-normal">Crafting elegant solutions through code and music. Building the future one commit at a time.</span>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-20 items-center section-animate">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">{"> "} The Journey</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  My coding journey began with curiosity and a broken computer. What started as fixing system errors
                  evolved into mastering problem-solving through code.
                </p>
                <p>
                  Between debugging sessions, I find harmony in guitar(music) and code share the same rhythm of patience
                  and precision.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image src="/profile.png" alt="kecheste profile" width={280} height={360} className="profile-image" />
            </div>
          </section>

          <section className="space-y-16 section-animate">
            <h2 className="text-3xl font-bold text-center">{"> "} Languages & Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { name: "Rust", icon: 
                  <svg className="fill-[var(--primary)]" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>rust</title>
                      <path d="M25.763 12.291c0.099-0.098 0.235-0.159 0.385-0.159 0.301 0 0.545 0.244 0.545 0.545s-0.244 0.545-0.545 0.545c-0.301 0-0.545-0.244-0.545-0.545 0-0.15 0.061-0.286 0.159-0.385v0zM15.342 3.906c0.163-0.171 0.392-0.278 0.647-0.278 0.493 0 0.892 0.399 0.892 0.892s-0.399 0.892-0.892 0.892c-0.413 0-0.76-0.28-0.862-0.661l-0.001-0.006c-0.018-0.068-0.029-0.145-0.029-0.225 0-0.238 0.093-0.454 0.245-0.614l-0 0zM26.965 15.901c0 0.273-0.010 0.545-0.030 0.814h-1.125c-0.112 0-0.158 0.073-0.158 0.185v0.516c0 1.216-0.686 1.48-1.287 1.547-0.572 0.065-1.206-0.239-1.284-0.589-0.089-1.265-0.773-2.353-1.772-2.994l-0.015-0.009c1.206-0.593 2.062-1.736 2.246-3.093l0.002-0.021c-0.049-1.229-0.72-2.29-1.705-2.884l-0.016-0.009c-0.667-0.438-1.472-0.719-2.339-0.773l-0.014-0.001h-11.63c1.569-1.749 3.678-2.987 6.063-3.45l0.069-0.011 1.371 1.438c0.148 0.155 0.356 0.252 0.587 0.252 0.218 0 0.415-0.086 0.561-0.226l-0 0 1.533-1.467c3.233 0.622 5.913 2.593 7.475 5.291l0.028 0.053-1.050 2.372c-0.044 0.097-0.069 0.21-0.069 0.329 0 0.329 0.195 0.613 0.477 0.742l0.005 0.002 2.022 0.898c0.035 0.359 0.053 0.721 0.053 1.089zM13.522 14.044v-2.063h3.699c0.191 0 1.349 0.221 1.349 1.087 0 0.719-0.888 0.977-1.618 0.977zM5.106 14.723l1.918-0.853c0.287-0.13 0.483-0.413 0.483-0.742 0-0.12-0.026-0.233-0.072-0.335l0.002 0.005-0.395-0.893h1.554v7.001h-3.134c-0.266-0.899-0.418-1.931-0.418-3 0-0.417 0.023-0.829 0.069-1.234l-0.005 0.050zM6.15 12.247c-0-0.295-0.239-0.534-0.534-0.534s-0.534 0.239-0.534 0.534c0 0.295 0.239 0.534 0.534 0.534s0.534-0.239 0.534-0.534v0zM9.548 26.027c-0.061 0.015-0.13 0.023-0.202 0.023-0.493 0-0.892-0.399-0.892-0.892s0.399-0.892 0.892-0.892c0.493 0 0.892 0.399 0.892 0.892 0 0.096-0.015 0.189-0.043 0.276l0.002-0.006c-0.097 0.3-0.34 0.526-0.643 0.599l-0.006 0.001zM21.937 23.178c-0.051-0.012-0.11-0.018-0.171-0.018-0.388 0-0.713 0.273-0.792 0.638l-0.001 0.005-0.447 2.085c-1.329 0.615-2.884 0.974-4.523 0.974-1.675 0-3.263-0.375-4.684-1.046l0.067 0.028-0.447-2.085c-0.080-0.369-0.404-0.642-0.792-0.642-0.061 0-0.12 0.007-0.177 0.019l0.005-0.001-1.841 0.395c-0.332-0.341-0.644-0.707-0.931-1.093l-0.021-0.029h8.957c0.101 0 0.169-0.018 0.169-0.11v-3.169c0-0.092-0.067-0.11-0.169-0.11h-2.62v-2.009h2.834c0.881 0.009 1.607 0.656 1.741 1.5l0.001 0.010c0.113 0.441 0.359 1.88 0.529 2.34 0.168 0.516 0.854 1.547 1.585 1.547h4.463c0.058-0.001 0.114-0.007 0.168-0.017l-0.006 0.001c-0.326 0.44-0.658 0.828-1.016 1.192l0.001-0.001zM22.365 26.070c1.13-0 2.046-0.917 2.046-2.047s-0.916-2.047-2.047-2.047-2.047 0.916-2.047 2.047c0 1.13 0.916 2.046 2.046 2.047h0zM30.789 15.629l-1.259-0.779q-0.016-0.184-0.035-0.367l1.082-1.008c0.084-0.079 0.136-0.192 0.136-0.316 0-0.184-0.115-0.342-0.277-0.406l-0.003-0.001-1.383-0.517q-0.051-0.179-0.109-0.357l0.863-1.198c0.051-0.070 0.082-0.158 0.082-0.253 0-0.215-0.156-0.393-0.361-0.427l-0.003-0-1.458-0.237q-0.085-0.165-0.176-0.328l0.612-1.345c0.025-0.053 0.039-0.114 0.039-0.18 0-0.090-0.027-0.173-0.075-0.242l0.001 0.001c-0.079-0.117-0.212-0.193-0.362-0.193-0.005 0-0.010 0-0.015 0l0.001-0-1.48 0.052q-0.114-0.144-0.234-0.283l0.34-1.441c0.007-0.030 0.011-0.064 0.011-0.099 0-0.24-0.194-0.434-0.434-0.434-0.035 0-0.069 0.004-0.102 0.012l0.003-0.001-1.441 0.34q-0.141-0.119-0.285-0.234l0.052-1.48c0-0.006 0-0.013 0-0.021 0-0.238-0.193-0.43-0.43-0.43-0.066 0-0.129 0.015-0.185 0.042l0.003-0.001-1.345 0.614c-0.109-0.059-0.218-0.119-0.328-0.176l-0.238-1.459c-0.036-0.207-0.215-0.362-0.429-0.362-0.094 0-0.182 0.030-0.253 0.081l0.001-0.001-1.199 0.863q-0.177-0.057-0.357-0.107l-0.517-1.383c-0.064-0.165-0.222-0.28-0.407-0.28-0.124 0-0.236 0.052-0.316 0.136l-0 0-1.008 1.083q-0.183-0.021-0.367-0.035l-0.779-1.259c-0.078-0.124-0.213-0.205-0.368-0.205s-0.291 0.081-0.367 0.204l-0.001 0.002-0.779 1.259q-0.184 0.016-0.367 0.035l-1.010-1.083c-0.079-0.085-0.192-0.138-0.317-0.138-0.185 0-0.343 0.116-0.405 0.279l-0.001 0.003-0.517 1.383c-0.12 0.034-0.238 0.071-0.357 0.107l-1.198-0.863c-0.070-0.050-0.157-0.080-0.252-0.080-0.215 0-0.393 0.155-0.429 0.36l-0 0.003-0.238 1.459q-0.165 0.085-0.328 0.176l-1.345-0.614c-0.053-0.025-0.115-0.039-0.18-0.039-0.239 0-0.433 0.194-0.433 0.433 0 0.006 0 0.012 0 0.017l-0-0.001 0.052 1.48q-0.144 0.114-0.285 0.234l-1.441-0.341c-0.030-0.007-0.064-0.011-0.099-0.011-0.24 0-0.434 0.194-0.434 0.434 0 0.035 0.004 0.069 0.012 0.102l-0.001-0.003 0.339 1.441c-0.078 0.094-0.157 0.189-0.233 0.283l-1.48-0.052c-0.005-0-0.011-0-0.017-0-0.239 0-0.433 0.194-0.433 0.433 0 0.065 0.014 0.127 0.040 0.183l-0.001-0.003 0.614 1.345q-0.091 0.162-0.176 0.328l-1.457 0.237c-0.207 0.036-0.362 0.214-0.362 0.429 0 0.094 0.030 0.182 0.081 0.253l-0.001-0.001 0.863 1.198q-0.056 0.178-0.109 0.357l-1.383 0.517c-0.165 0.064-0.28 0.222-0.28 0.407 0 0.124 0.052 0.236 0.135 0.316l0 0 1.082 1.008q-0.021 0.183-0.035 0.367l-1.259 0.779c-0.125 0.077-0.208 0.213-0.208 0.368s0.082 0.292 0.206 0.367l0.002 0.001 1.259 0.779c0.010 0.123 0.023 0.245 0.035 0.367l-1.082 1.010c-0.085 0.079-0.138 0.192-0.138 0.317 0 0.185 0.116 0.343 0.279 0.405l0.003 0.001 1.383 0.517c0.034 0.12 0.071 0.239 0.109 0.357l-0.863 1.198c-0.052 0.070-0.083 0.159-0.083 0.254 0 0.215 0.158 0.394 0.364 0.426l0.002 0 1.457 0.237c0.057 0.11 0.115 0.219 0.176 0.328l-0.614 1.345c-0.025 0.053-0.039 0.115-0.039 0.18 0 0.239 0.194 0.433 0.433 0.433 0.006 0 0.012-0 0.017-0l-0.001 0 1.479-0.052c0.077 0.096 0.154 0.191 0.234 0.285l-0.339 1.442c-0.007 0.030-0.011 0.064-0.011 0.099 0 0.239 0.194 0.433 0.433 0.433 0.036 0 0.070-0.004 0.103-0.012l-0.003 0.001 1.441-0.339c0.094 0.080 0.189 0.157 0.285 0.233l-0.052 1.48c-0 0.006-0 0.012-0 0.019 0 0.238 0.193 0.43 0.43 0.43 0.066 0 0.129-0.015 0.185-0.042l-0.003 0.001 1.345-0.612c0.109 0.061 0.218 0.119 0.328 0.176l0.238 1.457c0.036 0.207 0.214 0.363 0.429 0.363 0.094 0 0.181-0.030 0.253-0.081l-0.001 0.001 1.198-0.863q0.178 0.057 0.357 0.109l0.517 1.383c0.062 0.167 0.22 0.283 0.405 0.283 0.125 0 0.238-0.053 0.317-0.139l0-0 1.010-1.082c0.121 0.014 0.244 0.025 0.367 0.037l0.779 1.259c0.078 0.123 0.214 0.204 0.368 0.204s0.29-0.081 0.367-0.203l0.001-0.002 0.779-1.259c0.123-0.011 0.245-0.023 0.367-0.037l1.008 1.082c0.079 0.084 0.192 0.136 0.316 0.136 0.184 0 0.342-0.115 0.406-0.277l0.001-0.003 0.517-1.383q0.179-0.051 0.357-0.109l1.198 0.863c0.070 0.052 0.159 0.083 0.254 0.083 0.215 0 0.394-0.158 0.426-0.364l0-0.002 0.238-1.457c0.11-0.057 0.219-0.116 0.328-0.176l1.345 0.612c0.052 0.024 0.114 0.038 0.179 0.038 0.24 0 0.434-0.194 0.434-0.434 0-0.005-0-0.009-0-0.014l0 0.001-0.052-1.48q0.144-0.113 0.283-0.233l1.441 0.339c0.030 0.007 0.064 0.011 0.098 0.011 0.24 0 0.434-0.194 0.434-0.434 0-0.035-0.004-0.068-0.012-0.1l0.001 0.003-0.339-1.442c0.078-0.094 0.157-0.188 0.233-0.285l1.48 0.052c0.006 0 0.013 0 0.020 0 0.238 0 0.43-0.193 0.43-0.43 0-0.066-0.015-0.129-0.042-0.185l0.001 0.003-0.612-1.345c0.059-0.109 0.119-0.218 0.176-0.328l1.457-0.237c0.207-0.036 0.362-0.215 0.362-0.429 0-0.094-0.030-0.182-0.081-0.253l0.001 0.001-0.863-1.198 0.109-0.357 1.383-0.517c0.166-0.063 0.282-0.221 0.282-0.406 0-0.125-0.053-0.238-0.138-0.317l-0-0-1.082-1.010c0.013-0.121 0.025-0.244 0.035-0.367l1.259-0.779c0.125-0.077 0.208-0.213 0.208-0.368s-0.082-0.291-0.206-0.367l-0.002-0.001z"></path>
                  </svg>
                  , desc: "Systems" },
                { name: "TypeScript", icon: 
                  <svg className="fill-[var(--primary)]" width="800px" height="800px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H15V15H0V0ZM10 6C8.89543 6 8 6.89543 8 8C8 9.10457 8.89543 10 10 10H11C11.5523 10 12 10.4477 12 11C12 11.5523 11.5523 12 11 12H10C9.44772 12 9 11.5523 9 11H8C8 12.1046 8.89543 13 10 13H11C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9H10C9.44772 9 9 8.55228 9 8C9 7.44772 9.44772 7 10 7H11.1667C11.6269 7 12 7.3731 12 7.83333V8H13V7.83333C13 6.82081 12.1792 6 11.1667 6H10ZM3 6H8V7H6V13H5V7H3V6Z"/>
                  </svg>
                  , desc: "Web" },
                { name: "Dart", icon: 
                  <svg className="fill-[var(--primary)]" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.116 23.609c-0.009 0.014-0.025 0.016-0.039 0.020-0.056 0.070-0.142 0.089-0.218 0.122-0.816 0.358-1.63 0.722-2.444 1.084-0.068 0.030-0.129 0.021-0.195-0.001-0.421-0.142-0.838-0.293-1.257-0.441-0.511-0.181-1.021-0.361-1.532-0.541-1.025-0.361-2.050-0.722-3.074-1.085-0.615-0.218-1.232-0.433-1.847-0.65-0.913-0.323-1.829-0.641-2.741-0.968-0.145-0.052-0.299-0.082-0.43-0.168-0.007-0.006-0.014-0.013-0.021-0.019-0.030-0.042-0.041-0.092-0.051-0.141-0.052-0.248-0.081-0.497-0.084-0.751-0.044-3.38-0.005-6.759-0.019-10.139-0-0.055 0.009-0.107 0.018-0.16-0-0.011 0.006-0.017 0.015-0.021 0.008-0.007 0.017-0.008 0.026-0.004 0.052 0.027 0.087 0.074 0.127 0.114 4.537 4.537 9.074 9.074 13.611 13.61 0.043 0.043 0.082 0.090 0.137 0.119 0.008 0.006 0.014 0.013 0.019 0.021zM23.12 23.518c-0.022 0.003-0.039-0.005-0.054-0.020-0.021-0.022-0.043-0.043-0.064-0.064-4.555-4.555-9.109-9.109-13.664-13.664-0.033-0.033-0.071-0.063-0.096-0.104 0.033-0.027 0.072-0.034 0.113-0.035 0.037-0.001 0.074-0.001 0.111-0.001 3.307 0 6.613-0.001 9.92 0.001 0.296 0 0.591 0.020 0.882 0.084 0.059 0.013 0.119 0.025 0.166 0.067 0.007 0.005 0.014 0.011 0.022 0.016 0.086 0.139 0.121 0.299 0.175 0.45 0.433 1.232 0.871 2.462 1.302 3.694 0.278 0.794 0.56 1.587 0.84 2.38 0.454 1.285 0.909 2.57 1.36 3.856 0.058 0.165 0.111 0.332 0.177 0.494 0.032 0.080 0.022 0.153-0.013 0.233-0.305 0.678-0.604 1.359-0.905 2.039-0.071 0.16-0.141 0.321-0.214 0.48-0.015 0.033-0.029 0.068-0.058 0.093zM8.986 21.106c0.069 0.002 0.127 0.038 0.189 0.060 0.294 0.103 0.589 0.205 0.883 0.308 0.601 0.212 1.202 0.425 1.804 0.637 0.532 0.187 1.065 0.372 1.597 0.559 0.354 0.124 0.707 0.251 1.060 0.375 0.624 0.22 1.249 0.439 1.874 0.659 0.34 0.12 0.68 0.241 1.020 0.361 0.634 0.224 1.269 0.446 1.904 0.67 0.35 0.123 0.7 0.247 1.050 0.374 0.064 0.023 0.117 0.019 0.18-0.010 0.28-0.128 0.564-0.249 0.846-0.374 0.212-0.093 0.422-0.189 0.634-0.283 0.343-0.152 0.686-0.302 1.029-0.453 0.090-0.040 0.18-0.079 0.269-0.118-0.169 0.524-0.338 1.048-0.507 1.572-0.102 0.317-0.203 0.635-0.304 0.952-0.068 0.214-0.137 0.428-0.204 0.642-0.030 0.096-0.030 0.098-0.131 0.098-0.453 0-0.906-0.001-1.359-0.001-1.279-0.001-2.557 0.009-3.835-0.005-0.983-0.011-1.966-0.003-2.949-0.009-0.061-0-0.106-0.017-0.148-0.061-0.067-0.072-0.139-0.139-0.209-0.209-1.036-1.030-2.072-2.060-3.108-3.090-0.117-0.116-0.233-0.234-0.351-0.349-0.285-0.277-0.501-0.605-0.691-0.95-0.23-0.42-0.413-0.86-0.538-1.323-0.003-0.010-0.003-0.021-0.004-0.031zM23.343 23.845c0.014-0.107 0.078-0.194 0.118-0.29 0.099-0.239 0.207-0.475 0.312-0.712 0.091-0.205 0.183-0.409 0.274-0.614 0.126-0.285 0.251-0.57 0.377-0.855 0.043-0.096 0.085-0.192 0.132-0.286 0.029-0.057 0.037-0.108 0.014-0.171-0.147-0.408-0.293-0.817-0.437-1.227-0.075-0.211-0.146-0.424-0.22-0.635-0.177-0.506-0.354-1.011-0.532-1.516-0.12-0.34-0.241-0.68-0.361-1.020-0.175-0.495-0.349-0.991-0.523-1.486-0.119-0.337-0.239-0.673-0.358-1.010-0.184-0.522-0.366-1.044-0.55-1.566-0.12-0.34-0.241-0.68-0.361-1.020-0.175-0.495-0.347-0.991-0.524-1.485-0.051-0.142-0.107-0.281-0.141-0.428 0.214 0.043 0.418 0.118 0.621 0.197 0.509 0.2 0.988 0.455 1.417 0.797 0.195 0.156 0.365 0.34 0.541 0.516 0.256 0.255 0.509 0.514 0.765 0.77 0.821 0.823 1.641 1.647 2.463 2.469 0.051 0.051 0.073 0.102 0.072 0.174-0.002 1.826-0.002 3.653-0.003 5.479-0 0.941-0.002 1.883-0.003 2.824 0 0.011 0 0.021 0 0.032-0.001 0.085 0.016 0.085-0.084 0.117-0.16 0.051-0.321 0.102-0.481 0.153-0.812 0.259-1.624 0.519-2.435 0.778-0.023 0.007-0.047 0.012-0.071 0.018-0.008-0.002-0.015-0.003-0.023-0.005zM20.603 9.57c-0.124-0.023-0.247-0.047-0.371-0.069-0.107-0.019-0.214-0.031-0.323-0.037-0.709-0.039-1.418-0.018-2.127-0.019-2.912-0.002-5.823-0.001-8.735-0-0.042 0-0.084 0.002-0.126 0.004-0.007-0.001-0.014-0.002-0.021-0.004 0.183-0.136 0.377-0.256 0.567-0.382 0.491-0.327 0.984-0.651 1.476-0.977 1.025-0.678 2.049-1.358 3.074-2.036 0.524-0.347 1.050-0.691 1.573-1.040 0.093-0.062 0.177-0.137 0.287-0.173 0.226-0.076 0.45-0.056 0.673 0.009 0.31 0.089 0.578 0.252 0.816 0.467 0.088 0.080 0.171 0.167 0.256 0.251 0.778 0.772 1.556 1.545 2.335 2.316 0.059 0.058 0.1 0.121 0.127 0.2 0.167 0.484 0.34 0.967 0.51 1.45 0.005 0.013 0.007 0.027 0.010 0.041zM8.884 9.468c0.029 0.042 0.015 0.089 0.015 0.133 0.001 3.413 0.001 6.826 0.001 10.239 0 0.214 0.019 0.427 0.026 0.64 0.006 0.191 0.046 0.381 0.091 0.567 0.008 0.032 0.027 0.065 0.009 0.1-0.252-0.087-0.504-0.173-0.756-0.261-0.255-0.089-0.509-0.18-0.765-0.268-0.058-0.020-0.105-0.051-0.148-0.095-0.843-0.852-1.688-1.701-2.53-2.553-0.277-0.28-0.473-0.609-0.556-0.999-0.036-0.171-0.040-0.341 0.009-0.511 0.021-0.075 0.052-0.146 0.097-0.209 0.303-0.423 0.58-0.863 0.867-1.295 1.113-1.677 2.222-3.356 3.333-5.034 0.101-0.152 0.203-0.303 0.305-0.455z"></path>
                  </svg>
                  , desc: "Mobile" },
                { name: "Python", icon: 
                  <svg className="fill-[var(--primary)]" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.727 0c-.967.001-1.914.086-2.834.248l.098-.014c-2.423.428-2.862 1.324-2.862 2.976v2.182h5.726v.727h-7.874c-.02 0-.043-.001-.066-.001-1.737 0-3.184 1.239-3.507 2.881l-.004.023c-.256.872-.403 1.874-.403 2.91s.147 2.038.422 2.985l-.019-.076c.407 1.695 1.379 2.902 3.04 2.902h1.969v-2.616c.045-1.953 1.622-3.523 3.574-3.557h.003 5.719c1.584-.013 2.863-1.299 2.863-2.885 0-.009 0-.017 0-.026v.001-5.452c-.104-1.561-1.314-2.81-2.848-2.975l-.014-.001c-.866-.149-1.863-.234-2.879-.234-.036 0-.071 0-.107 0h.005zm-3.096 1.755h.017c.603 0 1.091.489 1.091 1.091s-.489 1.091-1.091 1.091c-.601 0-1.089-.487-1.091-1.088 0-.002 0-.005 0-.008 0-.596.48-1.08 1.074-1.086h.001z"/><path d="m18.287 6.119v2.542c-.022 1.977-1.604 3.578-3.572 3.63h-.005-5.719c-1.584.033-2.856 1.322-2.862 2.909v5.453c0 1.551 1.349 2.464 2.862 2.91.855.277 1.839.437 2.86.437s2.005-.16 2.927-.456l-.068.019c1.44-.417 2.862-1.258 2.862-2.91v-2.184h-5.719v-.727h8.582c1.664 0 2.284-1.161 2.863-2.902.28-.87.441-1.871.441-2.91s-.161-2.04-.46-2.979l.019.07c-.411-1.656-1.2-2.902-2.863-2.902zm-3.216 13.807h.017c.603 0 1.091.489 1.091 1.091s-.489 1.091-1.091 1.091c-.603 0-1.091-.489-1.091-1.091 0-.001 0-.003 0-.004 0-.002 0-.005 0-.007 0-.595.48-1.077 1.074-1.08z"/></svg>
                  , desc: "AI/ML" },
              ].map((lang, index) => (
                <div key={lang.name} className="text-center space-y-4 lang-card tech-card pt-1">
                  <div className="text-lg font-bold w-10 h-10 flex items-center justify-center mx-auto lang-icon">
                    {lang.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-base">{lang.name}</p>
                    <p className="text-sm opacity-70">{lang.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-16 section-animate">
            <h2 className="text-3xl font-bold text-center">{"> "} Experience</h2>
            <div className="space-y-12">
              {[
                {
                  year: "2024",
                  title: "Full-Stack Developer",
                  company: "ReSpark App Ltd.",
                  description:
                    "Led microservices architecture using Rust and TypeScript. Improved system performance by 40%.",
                },
                {
                  year: "2023",
                  title: "Software Engineer",
                  company: "miniExtensions",
                  description: "Developed web applications and contributed to open source projects.",
                },
                {
                  year: "2023",
                  title: "Machine Learning Intern",
                  company: "iCog Labs",
                  description: "Trained ML models and contributed to open source projects.",
                },
              ].map((exp, index) => (
                <div key={index} className="flex gap-12 timeline-item">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-[var(--foreground)] flex-shrink-0"></div>
                    <div className="w-0.5 h-24 bg-[var(--foreground)] mt-2"></div>
                  </div>
                  <div className="experience-card flex-1 space-y-2 p-8 border border-[var(--foreground)] bg-[var(--background)]">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5" />
                      <span className="text-lg font-semibold">{exp.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="font-medium opacity-80 text-lg">{exp.company}</p>
                    <p className="leading-relaxed text-lg">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-12 section-animate">
            <h2 className="text-3xl font-bold text-center font-mono">{"> "} Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-16">
              {[
                {
                  title: "react-why-rendered",
                  description: "A lightweight React utility to log exactly why a component re-rendered, helping developers optimize performance.",
                  tech: ["React", "JavaScript"],
                  link: "https://www.npmjs.com/package/react-why-rendered",
                  github: true,
                },
                {
                  title: "ForgeSpace",
                  description: "An idea development platform where users can brainstorm, visualize, and bring their concepts to life.",
                  tech: ["Next.js", "TypeScript"],
                  link: "https://forge-space.vercel.app",
                  github: false,
                },
                {
                  title: "YelpCamp",
                  description: "User rating based camping platform, where you can find camp sites near you.",
                  tech: ["Node.js", "React.js"],
                  link: "https://yelp-camp-kohl.vercel.app",
                  github: true,
                },
                {
                  title: "TypeScript Contribution",
                  description: "Added support for new ECMAScript features, merged into TypeScript v4.9 release.",
                  tech: ["TypeScript"],
                  github: true,
                },
              ].map((project, index) => (
                <div key={index} className="border border-[var(--background)] p-6 space-y-4 project-card">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold font-mono">{project.title}</h3>
                    <div className="flex gap-2 project-icons">
                      {project.github && <Github className="w-5 h-5 contact-icon" />}
                      {project.link &&
                        <Link href={project.link}>
                          <ExternalLink className="w-5 h-5 contact-icon" />
                        </Link>
                      }
                    </div>
                  </div>
                  <p className="leading-relaxed text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[var(--foreground)] text-[var(--background)] px-3 py-1 text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-16 section-animate">
            <h2 className="text-3xl font-bold text-center font-mono">{"> "} Open Source Contributions</h2>
            <div className="space-y-6">
              {[
                {
                  project: "rust-lang/rust",
                  contribution: "Improved error messages for async/await syntax",
                  impact: "500+ developers benefited",
                },
                {
                  project: "microsoft/TypeScript",
                  contribution: "Added support for new ECMAScript features",
                  impact: "Merged into v4.9 release",
                },
                {
                  project: "flutter/flutter",
                  contribution: "Fixed memory leaks in widget rendering",
                  impact: "Performance improvement for mobile apps",
                },
              ].map((contrib, index) => (
                <div key={index} className="flex items-center gap-4 p-4 contrib-item">
                  <Code className="w-6 h-6 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="font-mono font-semibold text-base">{contrib.project}</p>
                    <p className="text-base">{contrib.contribution}</p>
                    <p className="text-sm opacity-80">{contrib.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-20 section-animate">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Guitar className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Beyond Code</h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  When I'm not crafting code, you'll find me with my guitar, exploring melodies and rhythms. Music and
                  programming share beautiful symmetry; both require patience and harmony.
                </p>
                <p className="leading-relaxed text-lg">
                  The discipline from guitar practice translates directly into writing cleaner, more thoughtful code.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Quote className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Favorite Quotes</h2>
              </div>
              <div className="space-y-8">
                {[
                  {
                    quote: "Code is like humor. When you have to explain it, it's bad.",
                    author: "Cory House",
                  },
                  {
                    quote: "The best error message is the one that never shows up.",
                    author: "Thomas Fuchs",
                  },
                  {
                    quote: "Simplicity is the ultimate sophistication.",
                    author: "Leonardo da Vinci",
                  },
                ].map((q, index) => (
                  <blockquote key={index} className="pl-6 space-y-3 quote-item">
                    <p className="italic text-lg">"{q.quote}"</p>
                    <p className="text-base opacity-80">— {q.author}</p>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>

          <section className="text-center space-y-12 section-animate">
            <h2 className="text-3xl font-bold">{"> "} Let's Build Something Together</h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed">
              Always open to interesting projects and collaborations. Whether it's complex system architecture or simple
              automation, let's create something amazing.
            </p>
            <div className="flex justify-center gap-12 pt-8">
              <a href="mailto:abenidevworking@gmail.com" className="flex items-center gap-3 contact-icon">
                <Mail className="w-8 h-8" />
              </a>
              <a href="https://t.me/abenidev7" className="flex items-center gap-3 contact-icon">
                <MessageCircle className="w-8 h-8" />
              </a>
              <a href="https://x.com/kechestedev" className="flex items-center gap-3 contact-icon">
                <ExternalLink className="w-8 h-8" />
              </a>
              <a href="https://github.com/kecheste" className="flex items-center gap-3 contact-icon">
                <Github className="w-8 h-8" />
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
