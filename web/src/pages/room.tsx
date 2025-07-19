import { ArrowLeft, Radio } from 'lucide-react'
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import { QuestionForm } from '@/components/question-form'
import { Button } from '@/components/ui/button'
import { QuestionList } from '@/components/question-list'

type RoomParams = {
  roomId: string
}

type RoomLocation = {
  roomName: string
}

export function Room() {
  const params = useParams<RoomParams>()
  const location = useLocation()
  const state = location.state as RoomLocation | undefined
  const roomName = state?.roomName

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 size-4" />
                Voltar ao Início
              </Button>
            </Link>
            <span className="rounded-md bg-accent px-3 py-1.5 font-medium text-sm">
              {roomName ?? 'Nome não disponível'}
            </span>
            <Link to={`/room/${params.roomId}/audio`}>
              <Button className="flex items-center gap-2" variant="secondary">
                <Radio className="size-4" />
                Gravar Áudio
              </Button>
            </Link>
          </div>
          <h1 className="mb-2 font-bold text-3xl text-foreground">
            Sala de Perguntas
          </h1>
          <p className="text-muted-foreground">
            Faça perguntas e receba respostas com IA
          </p>
        </div>

        <div className="mb-8">
          <QuestionForm roomId={params.roomId} />
        </div>

        <QuestionList roomId={params.roomId} />
      </div>
    </div>
  )
}
