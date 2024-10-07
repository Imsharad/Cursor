import React, { useState } from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const plans = [
  {
    name: "Starter",
    monthlyPrice: 49,
    annualPrice: 470,
    description: "Perfect for individuals just starting their AI journey",
    features: [
      "Full course access",
      "Community forum",
      "Monthly Q&A sessions",
      "Certificate of completion",
    ],
    cta: "Start Learning",
  },
  {
    name: "Pro",
    monthlyPrice: 99,
    annualPrice: 950,
    description: "Ideal for serious learners aiming for mastery",
    features: [
      "Everything in Starter",
      "1-on-1 mentoring sessions",
      "Advanced projects review",
      "Priority support",
      "Exclusive webinars",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 299,
    annualPrice: 2870,
    description: "Tailored for teams and organizations",
    features: [
      "Everything in Pro",
      "Custom curriculum",
      "Team progress tracking",
      "Dedicated account manager",
      "On-demand instructor access",
      "Custom AI project consultation",
    ],
    cta: "Contact Sales",
  },
]

const FeatureItem: React.FC<{ feature: string; included?: boolean }> = ({ feature, included = true }) => (
  <li className="flex items-center space-x-2">
    {included ? (
      <Check className="h-5 w-5 text-green-500" />
    ) : (
      <X className="h-5 w-5 text-red-500" />
    )}
    <span>{feature}</span>
  </li>
)

const PriceDisplay: React.FC<{ price: number }> = ({ price }) => (
  <motion.span
    key={price}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-4xl font-bold"
  >
    ${price}
  </motion.span>
)

const EnhancedPricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Choose Your Learning Path</h2>
        <p className="text-xl text-center text-gray-600 mb-8">
          Invest in your future with our flexible pricing plans
        </p>
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className={`text-lg ${!isAnnual ? "font-semibold" : ""}`}>Monthly</span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className="data-[state=checked]:bg-purple-600"
          />
          <span className={`text-lg ${isAnnual ? "font-semibold" : ""}`}>Annual</span>
          <span className="ml-2 inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
            Save up to 20%
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "border-purple-500 shadow-lg shadow-purple-100 hover:shadow-xl hover:shadow-purple-200"
                  : "hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              <div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <PriceDisplay price={isAnnual ? plan.annualPrice : plan.monthlyPrice} />
                    <span className="text-gray-600">/{isAnnual ? "year" : "month"}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <FeatureItem key={featureIndex} feature={feature} />
                    ))}
                  </ul>
                </CardContent>
              </div>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg font-semibold">
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">All plans include:</p>
          <div className="flex justify-center space-x-4 mb-8">
            <span className="inline-flex items-center text-sm text-gray-600">
              <Check className="h-5 w-5 text-green-500 mr-1" /> 30-day money-back guarantee
            </span>
            <span className="inline-flex items-center text-sm text-gray-600">
              <Check className="h-5 w-5 text-green-500 mr-1" /> Cancel anytime
            </span>
            <span className="inline-flex items-center text-sm text-gray-600">
              <Check className="h-5 w-5 text-green-500 mr-1" /> 24/7 support
            </span>
          </div>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "Can I switch plans later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, you'll receive credit towards your next billing cycle.",
              },
              {
                question: "Is there a student discount?",
                answer:
                  "Yes, we offer a 20% discount for students with a valid .edu email address. Please contact our support team to verify your student status and receive your discount code.",
              },
              {
                question: "Do you offer team or enterprise pricing?",
                answer:
                  "Our Enterprise plan is designed for teams and organizations. We also offer custom pricing for larger teams or specific needs. Please contact our sales team for more information.",
              },
              {
                question: "What's included in the money-back guarantee?",
                answer:
                  "We offer a 30-day money-back guarantee for all our plans. If you're not satisfied with the course for any reason, simply contact our support team within 30 days of your purchase for a full refund.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default EnhancedPricing