import { useState } from "react";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Search, 
  MessageCircle, 
  HelpCircle,
  Users,
  Settings,
  Shield,
  BarChart3
} from "lucide-react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      category: "General",
      icon: HelpCircle,
      color: "bg-primary-light",
      faqs: [
        {
          question: "What is the SIH Internship Portal?",
          answer: "The SIH Internship Portal is an AI-powered platform designed to facilitate fair and transparent internship allocation. It connects students with industry opportunities through smart matching algorithms and provides comprehensive management tools for all stakeholders."
        },
        {
          question: "Who can use this platform?",
          answer: "The platform is designed for four main user types: Students seeking internships, Placement Cell administrators managing the allocation process, Faculty members coordinating with industry partners, and Recruiters posting opportunities and finding candidates."
        },
        {
          question: "How does the smart matching algorithm work?",
          answer: "Our AI-powered algorithm analyzes student profiles, skills, academic performance, preferences, and geographic constraints alongside company requirements to create optimal matches. It considers factors like skill compatibility, location preferences, and quota requirements to ensure fair allocation."
        },
        {
          question: "Is the platform free to use?",
          answer: "Yes, the platform is completely free for students and educational institutions. Companies may have premium features available for enhanced recruiting capabilities."
        }
      ]
    },
    {
      category: "Students",
      icon: Users,
      color: "bg-secondary-light",
      faqs: [
        {
          question: "How do I create my student profile?",
          answer: "After registering, complete your profile by adding personal information, academic details, skills, projects, and preferences. Upload your resume for automatic skill extraction. The more complete your profile, the better your matching opportunities."
        },
        {
          question: "How do I apply for internships?",
          answer: "Browse available opportunities in the 'Opportunities' section, filter by your preferences, and click 'Apply' on positions that interest you. You can track all your applications in the 'Applications' dashboard."
        },
        {
          question: "When will I know my allocation results?",
          answer: "Allocation results are typically announced after the application deadline and algorithm processing. You'll receive notifications via email and can check your status in the 'Results' section of your dashboard."
        },
        {
          question: "Can I appeal my allocation decision?",
          answer: "Yes, if you believe there was an error in the allocation process, you can submit an appeal through the 'Results' section. Appeals are reviewed by the placement cell and faculty members."
        }
      ]
    },
    {
      category: "Administration",
      icon: Settings,
      color: "bg-accent-light",
      faqs: [
        {
          question: "How do I manage student data and internship listings?",
          answer: "Use the Admin Dashboard to upload student data via CSV/Excel files, manage internship listings, set allocation rules and quotas, and monitor the entire process through comprehensive reporting tools."
        },
        {
          question: "How do I set allocation rules and quotas?",
          answer: "In the 'Rules & Quotas' section, you can define percentage quotas for different categories, location-based restrictions, domain-specific requirements, and other allocation parameters to ensure fair distribution."
        },
        {
          question: "Can I manually override allocations?",
          answer: "Yes, the platform provides manual override capabilities for special cases. All overrides are logged for transparency and audit purposes."
        },
        {
          question: "How do I generate reports?",
          answer: "Use the 'Reports' section to generate comprehensive analytics including placement statistics, allocation summaries, and trend analysis. Reports can be exported in PDF or Excel format."
        }
      ]
    },
    {
      category: "Security & Privacy",
      icon: Shield,
      color: "bg-warning/20",
      faqs: [
        {
          question: "How is my data protected?",
          answer: "We use advanced encryption, JWT authentication, and blockchain-based audit trails to ensure your data is secure. All sensitive information is encrypted both in transit and at rest."
        },
        {
          question: "Who can access my personal information?",
          answer: "Access to personal information is strictly controlled based on user roles. Only authorized personnel (placement cell, relevant faculty) can access student data, and all access is logged for audit purposes."
        },
        {
          question: "Are the allocation algorithms transparent?",
          answer: "Yes, we believe in transparency. The allocation methodology is documented and available for review. All allocation decisions include explanations of the factors considered."
        },
        {
          question: "How do you prevent bias in allocations?",
          answer: "Our algorithms are designed with fairness in mind, incorporating bias detection mechanisms and regular audits. The system focuses on merit, skills, and objective criteria while ensuring equal opportunities for all students."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Find answers to common questions about the SIH Internship Portal
            </p>
            
            {/* Search Bar */}
            <div className="relative mx-auto max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {searchQuery && (
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                {filteredFAQs.reduce((acc, cat) => acc + cat.faqs.length, 0)} results found
              </Badge>
            </div>
          )}

          {filteredFAQs.map((category) => (
            <div key={category.category} className="mb-12">
              <div className="mb-6 flex items-center space-x-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${category.color}`}>
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{category.category}</h2>
              </div>

              <Card className="border-0 shadow-medium">
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`${category.category}-${index}`}>
                        <AccordionTrigger className="px-6 py-4 text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          ))}

          {filteredFAQs.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try searching with different keywords or browse all categories above.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <MessageCircle className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h2 className="mb-4 text-3xl font-bold">Need More Help?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Our AI-powered chatbot can provide instant answers to your specific questions
            </p>
            <Card className="border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>AI Support Assistant</span>
                  <Badge variant="secondary">Coming Soon</Badge>
                </CardTitle>
                <CardDescription>
                  Get instant, personalized answers to your questions about the internship process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-muted/50 p-6">
                  <div className="mb-4 flex items-start space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                      <MessageCircle className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">AI Assistant</p>
                      <p className="text-sm text-muted-foreground">
                        Hello! I'm here to help you with any questions about the internship allocation process. 
                        What would you like to know?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input placeholder="Type your question here..." disabled />
                    <Button disabled>Send</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Still Have Questions?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Contact our support team for personalized assistance
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button variant="default" className="flex-1" asChild>
                <a href="/contact">Contact Support</a>
              </Button>
              <Button variant="outline" className="flex-1" asChild>
                <a href="mailto:support@sihportal.gov.in">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;