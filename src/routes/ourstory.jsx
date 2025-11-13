import { createFileRoute } from '@tanstack/react-router'
import OurStory from '../pages/OurStory'

export const Route = createFileRoute('/ourstory')({
  component: RouteComponent,
})

function RouteComponent() {
  return <OurStory/>
}
