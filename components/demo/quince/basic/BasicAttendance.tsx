"use client"

import { useState, useRef, type FormEvent } from "react"
import { useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { basicDemoData } from "./data/basic-demo-data"

export function BasicAttendance() {
  const [name, setName] = useState("")
  const [attendance, setAttendance] = useState<string | null>(null)
  const [companions, setCompanions] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!name || !attendance || !phone) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "¡Gracias!",
      description: "Tu respuesta ha sido registrada en este demo. En la versión real se enviará por WhatsApp.",
    })

    // Reset form
    setName("")
    setAttendance(null)
    setCompanions("")
    setPhone("")
    setIsSubmitting(false)
  }

  return (
    <section className="py-16 px-4 bg-primary/5">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="section-title">{basicDemoData.attendance.title}</h2>

        <div className="mt-4 mb-8 text-center">
          <p className="text-lg">Respetuosamente</p>
          <p className="text-lg font-medium my-2">&lt;{basicDemoData.event.restrictions}&gt;</p>
          <p className="text-lg">{basicDemoData.attendance.subtitle}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mt-8">
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <Label htmlFor="name" className="text-base">
                {basicDemoData.attendance.fields.name}
              </Label>
              <Input
                id="name"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label className="text-base mb-2 block">{basicDemoData.attendance.fields.response}</Label>
              <RadioGroup value={attendance || ""} onValueChange={setAttendance}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">{basicDemoData.attendance.fields.responseOptions.no}</Label>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">{basicDemoData.attendance.fields.responseOptions.yes}</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="companions" className="text-base">
                {basicDemoData.attendance.fields.companions}
              </Label>
              <Textarea
                id="companions"
                placeholder="Nombre y apellido"
                value={companions}
                onChange={(e) => setCompanions(e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-base">
                {basicDemoData.attendance.fields.phone}
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Para enviarte algún aviso de importancia."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div className="text-center pt-4">
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-light text-white py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "ENVIANDO..." : "ENVIAR RESPUESTA"}
              </Button>
            </div>

            {/* Nota del demo */}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs text-blue-700">
                💡 <strong>Demo:</strong> En la versión real, la confirmación se envía automáticamente por WhatsApp a {basicDemoData.event.parents.mother}.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
} 