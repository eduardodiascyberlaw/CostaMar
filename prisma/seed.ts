import { PrismaClient, ServiceCategory, ProfessionalType, Role } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding CostaMar database...");

  // ─── Super Admin ─────────────────────────────────────────────
  const adminPassword = await hash("CostaMar2026!", 12);

  const superAdmin = await prisma.user.upsert({
    where: { email: "admin@costamar.pt" },
    update: {},
    create: {
      name: "Priscila Costa",
      email: "admin@costamar.pt",
      password: adminPassword,
      role: Role.SUPER_ADMIN,
      phone: "+351900000000",
    },
  });
  console.log(`✅ Super Admin criado: ${superAdmin.email}`);

  // ─── Serviços ────────────────────────────────────────────────
  const services = [
    // Estética Corporal
    {
      name: "Sculpt Body",
      description: "Tratamento revolucionário que combina Ultrassom Microfocado e Criofrequência para eliminar gordura e firmar a pele. Resultados visíveis desde a primeira sessão.",
      category: ServiceCategory.ESTETICA_CORPORAL,
      price: 50,
      duration: 60,
      professionalType: ProfessionalType.PRINCIPAL,
    },
    {
      name: "Radiofrequência Corporal",
      description: "Tecnologia avançada para firmeza e rejuvenescimento da pele. Estimula a produção de colagénio para uma pele mais firme e tonificada.",
      category: ServiceCategory.ESTETICA_CORPORAL,
      price: 40,
      duration: 45,
      professionalType: ProfessionalType.PRINCIPAL,
    },
    {
      name: "Drenagem Sculp",
      description: "Drenagem linfática especializada com técnicas modeladoras. Reduz retenção de líquidos e melhora o contorno corporal.",
      category: ServiceCategory.ESTETICA_CORPORAL,
      price: 35,
      duration: 50,
      professionalType: ProfessionalType.PRINCIPAL,
    },
    {
      name: "Tratamento Modelador Glúteos",
      description: "Os melhores tratamentos para turbinar o bumbum. Combinação de técnicas exclusivas para definição e volume.",
      category: ServiceCategory.ESTETICA_CORPORAL,
      price: 45,
      duration: 50,
      professionalType: ProfessionalType.PRINCIPAL,
    },
    // Estética Facial
    {
      name: "Limpeza de Pele Profunda",
      description: "Limpeza facial completa com extração, tonificação e hidratação profunda. Pele renovada e luminosa.",
      category: ServiceCategory.ESTETICA_FACIAL,
      price: 60,
      duration: 75,
      professionalType: ProfessionalType.PRINCIPAL,
    },
    {
      name: "Hidratação Facial",
      description: "Tratamento intensivo de hidratação para peles secas e desidratadas. Nutrição profunda com ativos premium.",
      category: ServiceCategory.ESTETICA_FACIAL,
      price: 45,
      duration: 45,
      professionalType: ProfessionalType.PRINCIPAL,
    },
    {
      name: "Radiofrequência Facial",
      description: "Rejuvenescimento facial não invasivo. Reduz rugas, flacidez e melhora o contorno do rosto.",
      category: ServiceCategory.ESTETICA_FACIAL,
      price: 50,
      duration: 40,
      professionalType: ProfessionalType.PRINCIPAL,
    },
    // Cabelereira
    {
      name: "Hidratação + Escova",
      description: "Hidratação profunda capilar seguida de escova modeladora. Cabelos sedosos, brilhantes e com movimento.",
      category: ServiceCategory.CABELEREIRA,
      price: 30,
      duration: 60,
      professionalType: ProfessionalType.PRINCIPAL,
    },
    {
      name: "Penteado",
      description: "Penteado profissional para eventos especiais. Criação personalizada de acordo com o estilo e ocasião.",
      category: ServiceCategory.CABELEREIRA,
      price: 35,
      duration: 45,
      professionalType: ProfessionalType.PRINCIPAL,
    },
    // Nail Designer
    {
      name: "Unhas em Gel",
      description: "Aplicação de unhas em gel com designs exclusivos. Durabilidade e elegância para as suas mãos.",
      category: ServiceCategory.NAIL_DESIGNER,
      price: 25,
      duration: 90,
      professionalType: ProfessionalType.PARCEIRO,
    },
    {
      name: "Manicure Completa",
      description: "Tratamento completo de unhas com corte, lixar, cutículas e esmaltagem profissional.",
      category: ServiceCategory.NAIL_DESIGNER,
      price: 15,
      duration: 45,
      professionalType: ProfessionalType.PARCEIRO,
    },
    // Holístico
    {
      name: "Mesa Radiônica",
      description: "Terapia holística para equilíbrio energético e prosperidade. Utiliza frequências vibratórias para harmonização do corpo e mente.",
      category: ServiceCategory.HOLISTICO,
      price: 40,
      duration: 45,
      professionalType: ProfessionalType.PRINCIPAL,
    },
    {
      name: "Equilíbrio de Chakras",
      description: "Sessão de alinhamento e equilíbrio dos chakras. Promove bem-estar físico, emocional e espiritual através de técnicas energéticas.",
      category: ServiceCategory.HOLISTICO,
      price: 35,
      duration: 40,
      professionalType: ProfessionalType.PRINCIPAL,
    },
    {
      name: "Cristais Energéticos",
      description: "Terapia com cristais para limpeza e harmonização da energia. Cada cristal é selecionado especificamente para as suas necessidades.",
      category: ServiceCategory.HOLISTICO,
      price: 30,
      duration: 35,
      professionalType: ProfessionalType.PRINCIPAL,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { id: service.name.toLowerCase().replace(/\s+/g, "-") },
      update: { ...service, price: service.price },
      create: { ...service, price: service.price },
    });
  }
  console.log(`✅ ${services.length} serviços criados`);

  // ─── Packs ───────────────────────────────────────────────────
  const sculpt = await prisma.service.findFirst({ where: { name: "Sculpt Body" } });
  const drena = await prisma.service.findFirst({ where: { name: "Drenagem Sculp" } });

  if (sculpt) {
    const pack1 = await prisma.pack.upsert({
      where: { id: "pack-premium-abdominal" },
      update: {},
      create: {
        id: "pack-premium-abdominal",
        name: "Pack Premium — Abdominal Esculpido",
        description: "6 sessões de Sculpt Body focadas na região abdominal. Corpo dos sonhos começa aqui!",
        totalSessions: 6,
        price: 168,
        services: {
          create: { serviceId: sculpt.id },
        },
      },
    });
    console.log(`✅ Pack criado: ${pack1.name}`);
  }

  if (sculpt && drena) {
    const pack2 = await prisma.pack.upsert({
      where: { id: "pack-exclusivo-abd-pernas" },
      update: {},
      create: {
        id: "pack-exclusivo-abd-pernas",
        name: "Pack Exclusivo — Abdominal + Pernas Definidas",
        description: "6 sessões combinadas de Sculpt Body e Drenagem Sculp. Transforme o seu corpo com resultados reais.",
        totalSessions: 6,
        price: 250,
        services: {
          create: [
            { serviceId: sculpt.id },
            { serviceId: drena.id },
          ],
        },
      },
    });
    console.log(`✅ Pack criado: ${pack2.name}`);
  }

  // ─── Templates de Mensagens WhatsApp ─────────────────────────
  const templates = [
    {
      name: "Lembrete de Agendamento",
      type: "REMINDER" as const,
      content: "Olá {{nome}}! 💜\n\nLembramos que tem agendamento na CostaMar amanhã, {{data}} às {{hora}}.\n\nServiço: {{servico}}\n\nAté lá! 🐚\n— CostaMar by Priscila",
    },
    {
      name: "Pós-Tratamento",
      type: "FOLLOW_UP" as const,
      content: "Olá {{nome}}! 💜\n\nComo se sentiu após o seu {{servico}}? Esperamos que tenha gostado!\n\nSe tiver alguma dúvida ou desconforto, estamos aqui para ajudar.\n\n— CostaMar by Priscila 🐚",
    },
    {
      name: "Parabéns Aniversário",
      type: "BIRTHDAY" as const,
      content: "Feliz Aniversário, {{nome}}! 🎂💜\n\nA CostaMar tem um presente especial para si! Venha celebrar connosco e aproveite 15% de desconto no seu próximo tratamento.\n\nVálido durante todo o mês! 🎁\n\n— CostaMar by Priscila 🐚",
    },
    {
      name: "Promoção Novo Tratamento",
      type: "PROMOTION" as const,
      content: "Olá {{nome}}! ✨\n\nTemos novidades na CostaMar! Conheça o nosso novo tratamento: {{servico}}.\n\nAgende a sua avaliação gratuita e descubra como podemos ajudá-la a conquistar o corpo dos seus sonhos!\n\n— CostaMar by Priscila 🐚",
    },
    {
      name: "Reactivação Cliente",
      type: "REACTIVATION" as const,
      content: "Olá {{nome}}! 💜\n\nSentimos a sua falta na CostaMar! Já passaram {{dias}} dias desde a sua última visita.\n\nQue tal agendar o seu próximo tratamento? Temos condições especiais à sua espera!\n\n— CostaMar by Priscila 🐚",
    },
  ];

  for (const template of templates) {
    await prisma.messageTemplate.upsert({
      where: { id: template.name.toLowerCase().replace(/\s+/g, "-") },
      update: { content: template.content },
      create: {
        id: template.name.toLowerCase().replace(/\s+/g, "-"),
        ...template,
      },
    });
  }
  console.log(`✅ ${templates.length} templates de mensagem criados`);

  console.log("\n🎉 Seed concluído com sucesso!");
  console.log("   Login: admin@costamar.pt / CostaMar2026!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
