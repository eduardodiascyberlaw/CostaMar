"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Star,
  Phone,
  Instagram,
  Facebook,
  MapPin,
  Clock,
  ChevronRight,
  Menu,
  X,
  LogIn,
} from "lucide-react";
import { useState } from "react";

// ─── Navbar ────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#packs", label: "Packs" },
    { href: "#holistico", label: "Holístico" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="CostaMar by Priscila"
              width={270}
              height={90}
              className="h-16 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/login"
              className="flex items-center gap-2 px-4 py-2 bg-purple-800 text-white text-sm font-medium rounded-full hover:bg-purple-700 transition-colors"
            >
              <LogIn size={16} />
              Área Reservada
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-700"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-purple-100 shadow-lg"
        >
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-800 text-white rounded-full font-medium"
            >
              <LogIn size={16} />
              Área Reservada
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-gold-500" size={20} />
              <span className="text-gold-600 font-medium text-sm tracking-wider uppercase">
                Clínica de Estética & Bem-Estar
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transforme o seu{" "}
              <span className="text-purple-800">corpo</span> e a sua{" "}
              <span className="text-gold-500">energia</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Resultados reais com tecnologia avançada e experiência exclusiva.
              Na CostaMar, cuidamos do seu corpo e da sua alma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/351900000000?text=Olá! Gostaria de agendar uma avaliação gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-800 text-white font-semibold rounded-full hover:bg-purple-700 transition-all shadow-lg shadow-purple-800/25 hover:shadow-purple-800/40"
              >
                <Phone size={20} />
                Agende sua Avaliação Gratuita
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-purple-800 text-purple-800 font-semibold rounded-full hover:bg-purple-50 transition-colors"
              >
                Conhecer Serviços
                <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-800 rounded-[2rem] rotate-3 opacity-20" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/images/priscila-services.jpg"
                  alt="Priscila - CostaMar"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center">
                  <Star className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">+40</p>
                  <p className="text-sm text-gray-500">Serviços</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ──────────────────────────────────────────────────────

const serviceCategories = [
  {
    icon: <Sparkles className="text-purple-700" size={32} />,
    title: "Estética Corporal",
    description:
      "Sculpt Body, Radiofrequência, Drenagem Sculp e tratamentos modeladores com tecnologia avançada.",
    services: [
      "Sculpt Body (Ultrassom + Criofrequência)",
      "Radiofrequência Corporal",
      "Drenagem Sculp",
      "Tratamento Modelador Glúteos",
    ],
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: <Heart className="text-pink-600" size={32} />,
    title: "Estética Facial",
    description:
      "Limpeza de pele profunda, hidratação intensiva e rejuvenescimento facial não invasivo.",
    services: [
      "Limpeza de Pele Profunda — 60€",
      "Hidratação Facial",
      "Radiofrequência Facial",
    ],
    color: "from-pink-500 to-purple-600",
  },
  {
    icon: (
      <svg
        className="text-gold-500"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Cabelereira & Nails",
    description:
      "Hidratação capilar, escovas modeladoras, penteados profissionais e nail design exclusivo.",
    services: [
      "Hidratação + Escova",
      "Penteado Profissional",
      "Unhas em Gel",
      "Manicure Completa",
    ],
    color: "from-gold-400 to-gold-600",
  },
  {
    icon: (
      <svg
        className="text-purple-600"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "Holístico",
    description:
      "Mesa Radiônica, equilíbrio de chakras e cristais energéticos para harmonização corpo e mente.",
    services: [
      "Mesa Radiônica",
      "Equilíbrio de Chakras",
      "Cristais Energéticos",
    ],
    color: "from-purple-600 to-indigo-700",
  },
];

function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 font-medium text-sm tracking-wider uppercase">
            Os Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Cuide do seu corpo e da sua alma
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Mais de 40 serviços e procedimentos disponíveis. Combinamos
            tecnologia avançada com terapias holísticas para o seu bem-estar
            completo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl border border-purple-100 p-8 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    {cat.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {cat.services.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ─────────────────────────────────────────────────────────

function About() {
  return (
    <section id="sobre" className="py-24 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/priscila-profile.jpg"
                alt="Priscila - Fundadora CostaMar"
                width={600}
                height={600}
                className="object-cover w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-purple-800 text-white rounded-2xl p-6 shadow-xl">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-purple-200 text-sm">Anos de experiência</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-500 font-medium text-sm tracking-wider uppercase">
              Sobre a CostaMar
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Acredite em você
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A CostaMar nasceu da paixão da Priscila pelo cuidado integral
                do ser humano. Acreditamos que a beleza verdadeira vem de
                dentro para fora, e por isso unimos estética avançada com
                terapias holísticas.
              </p>
              <p>
                Com mais de uma década de experiência, a Priscila combina
                técnicas inovadoras de body sculpting e rejuvenescimento facial
                com práticas energéticas como mesa radiônica, equilíbrio de
                chakras e cristais.
              </p>
              <p>
                Na CostaMar, cada cliente é único. Criamos protocolos
                personalizados para que alcance os resultados dos seus sonhos,
                sempre com acolhimento, carinho e profissionalismo.
              </p>
            </div>
            <div className="flex items-center gap-8 mt-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-800">+40</p>
                <p className="text-sm text-gray-500">Serviços</p>
              </div>
              <div className="w-px h-12 bg-purple-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-800">500+</p>
                <p className="text-sm text-gray-500">Clientes felizes</p>
              </div>
              <div className="w-px h-12 bg-purple-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-800">5</p>
                <p className="text-sm text-gray-500">Categorias</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Packs ─────────────────────────────────────────────────────────

function Packs() {
  return (
    <section id="packs" className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 font-medium text-sm tracking-wider uppercase">
            Packs Exclusivos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            O corpo dos sonhos começa aqui
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Packs especiais com 6 sessões para resultados reais e duradouros.
            Tecnologia avançada. Experiência exclusiva.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pack Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gold-500/30 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />
            <div className="relative">
              <span className="text-gold-400 text-sm font-medium tracking-wider uppercase">
                Pack Premium
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-1">
                Abdominal Esculpido
              </h3>
              <p className="text-gray-400 text-sm mb-6">6 sessões</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-5xl font-bold text-gold-400">168</span>
                <span className="text-gold-400 text-xl mb-1">€</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-300">
                  <Star className="text-gold-400 flex-shrink-0" size={16} />
                  Sculpt Body — Ultrassom + Criofrequência
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Star className="text-gold-400 flex-shrink-0" size={16} />
                  Foco na região abdominal
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Star className="text-gold-400 flex-shrink-0" size={16} />
                  Resultados desde a 1ª sessão
                </li>
              </ul>
              <a
                href="https://wa.me/351900000000?text=Olá! Gostaria de saber mais sobre o Pack Premium Abdominal Esculpido."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-gold-500 text-white font-semibold rounded-full hover:bg-gold-400 transition-colors"
              >
                Reserve já a sua vaga
              </a>
            </div>
          </motion.div>

          {/* Pack Exclusivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-purple-500/30 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              MAIS POPULAR
            </div>
            <div className="relative">
              <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
                Pack Exclusivo
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-1">
                Abdominal + Pernas
              </h3>
              <p className="text-gray-400 text-sm mb-6">6 sessões</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-5xl font-bold text-purple-400">250</span>
                <span className="text-purple-400 text-xl mb-1">€</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-300">
                  <Star className="text-purple-400 flex-shrink-0" size={16} />
                  Sculpt Body + Drenagem Sculp
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Star className="text-purple-400 flex-shrink-0" size={16} />
                  Abdómen + Pernas definidas
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Star className="text-purple-400 flex-shrink-0" size={16} />
                  Mais definição. Menos medidas.
                </li>
              </ul>
              <a
                href="https://wa.me/351900000000?text=Olá! Gostaria de saber mais sobre o Pack Exclusivo Abdominal + Pernas."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors"
              >
                Agende agora
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Holistic ──────────────────────────────────────────────────────

function Holistic() {
  return (
    <section id="holistico" className="py-24 bg-gradient-to-br from-purple-100 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-600 font-medium text-sm tracking-wider uppercase">
              Terapias Holísticas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Como manter seu chakra equilibrado
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Na CostaMar, acreditamos no equilíbrio entre corpo, mente e
                espírito. As nossas terapias holísticas complementam os
                tratamentos estéticos para um bem-estar verdadeiramente
                completo.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Realize atividades ligadas à natureza",
                "Pratique exercícios de respiração",
                "Priorize a boa alimentação",
                "Encontre uma atividade criativa",
                "Use cristais energéticos",
              ].map((tip) => (
                <li key={tip} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="text-purple-600" size={16} />
                  </div>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/priscila-chakra.jpg"
                alt="Priscila - Terapias Holísticas"
                width={600}
                height={600}
                className="object-cover w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ───────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 font-medium text-sm tracking-wider uppercase">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Venha conhecer o nosso espaço
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.a
            href="https://wa.me/351900000000"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-8 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-colors"
          >
            <Phone className="text-purple-700 mb-4" size={32} />
            <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
            <p className="text-gray-600 text-sm">+351 900 000 000</p>
          </motion.a>

          <motion.a
            href="https://instagram.com/costamar_bypriscilla"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center p-8 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-colors"
          >
            <Instagram className="text-purple-700 mb-4" size={32} />
            <h3 className="font-bold text-gray-900 mb-1">Instagram</h3>
            <p className="text-gray-600 text-sm">@costamar_bypriscilla</p>
          </motion.a>

          <motion.a
            href="https://facebook.com/Costamarcoiffeur01"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center p-8 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-colors"
          >
            <Facebook className="text-purple-700 mb-4" size={32} />
            <h3 className="font-bold text-gray-900 mb-1">Facebook</h3>
            <p className="text-gray-600 text-sm">CostaMar Coiffeur</p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-500">
            <MapPin size={18} />
            <span>Portugal</span>
          </div>
          <div className="inline-flex items-center gap-2 text-gray-500 ml-6">
            <Clock size={18} />
            <span>Seg-Sex 9h-19h | Sáb 9h-14h</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="CostaMar"
              width={120}
              height={40}
              className="h-10 w-auto brightness-200"
            />
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/costamar_bypriscilla"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com/Costamarcoiffeur01"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://wa.me/351900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Phone size={20} />
            </a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} CostaMar by Priscila. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Packs />
      <Holistic />
      <Contact />
      <Footer />
    </>
  );
}
