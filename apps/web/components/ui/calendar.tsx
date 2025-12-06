"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<"div"> & {
  selected?: Date
  onSelect?: (date: Date | undefined) => void
  disabled?: (date: Date) => boolean
  month?: Date
  onMonthChange?: (month: Date) => void
}

function Calendar({
  className,
  selected,
  onSelect,
  disabled,
  month: controlledMonth,
  onMonthChange,
  ...props
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(
    controlledMonth || selected || new Date()
  )

  const month = controlledMonth || currentMonth

  const handleMonthChange = (newMonth: Date) => {
    if (onMonthChange) {
      onMonthChange(newMonth)
    } else {
      setCurrentMonth(newMonth)
    }
  }

  const daysInMonth = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0
  ).getDate()

  const firstDayOfMonth = new Date(
    month.getFullYear(),
    month.getMonth(),
    1
  ).getDay()

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i)

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const previousMonth = () => {
    handleMonthChange(
      new Date(month.getFullYear(), month.getMonth() - 1, 1)
    )
  }

  const nextMonth = () => {
    handleMonthChange(
      new Date(month.getFullYear(), month.getMonth() + 1, 1)
    )
  }

  const isSelected = (day: number) => {
    if (!selected) return false
    return (
      selected.getDate() === day &&
      selected.getMonth() === month.getMonth() &&
      selected.getFullYear() === month.getFullYear()
    )
  }

  const isDisabled = (day: number) => {
    if (!disabled) return false
    const date = new Date(month.getFullYear(), month.getMonth(), day)
    return disabled(date)
  }

  return (
    <div className={cn("p-3", className)} {...props}>
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={previousMonth}
          className="h-7 w-7 p-0"
        >
          ←
        </Button>
        <div className="font-semibold">
          {monthNames[month.getMonth()]} {month.getFullYear()}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={nextMonth}
          className="h-7 w-7 p-0"
        >
          →
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {blanks.map((blank) => (
          <div key={`blank-${blank}`} />
        ))}
        {days.map((day) => (
          <Button
            key={day}
            variant={isSelected(day) ? "default" : "ghost"}
            size="sm"
            className="h-9 w-9 p-0"
            disabled={isDisabled(day)}
            onClick={() => {
              const date = new Date(
                month.getFullYear(),
                month.getMonth(),
                day
              )
              onSelect?.(date)
            }}
          >
            {day}
          </Button>
        ))}
      </div>
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
