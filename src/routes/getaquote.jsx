import { createFileRoute } from '@tanstack/react-router'
import GetaQuote from '../pages/GetaQuote'

export const Route = createFileRoute('/getaquote')({
  component: RouteComponent,
})

function RouteComponent() {
  return <GetaQuote />
}
