import { createFileRoute } from '@tanstack/react-router'
import CarFinance from '../pages/CarFinance'

export const Route = createFileRoute('/carfinance')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CarFinance/>
}
