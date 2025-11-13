import { createFileRoute } from '@tanstack/react-router'
import Car from '../pages/Car'

export const Route = createFileRoute('/car')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Car/>
}
