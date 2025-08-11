import { fastifyCors } from '@fastify/cors'
import { fastifyMultipart } from '@fastify/multipart'
import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { env } from './env.ts'
import { createQuestionsRoute } from './http/routes/create-question.ts'
import { createRoomsRoute } from './http/routes/create-room.ts'
import { getRoomsQuestions } from './http/routes/get-room-questions.ts'
import { getRoomsRoute } from './http/routes/get-rooms.ts'
import { uploadAudioRoute } from './http/routes/upload-audio.ts'

const PORT_FASTIFY = 5173

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyMultipart)

app.register(fastifyCors, {
  origin: `http://localhost:${PORT_FASTIFY}`,
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
  return 'OK'
})

app.register(getRoomsRoute)
app.register(createRoomsRoute)
app.register(getRoomsQuestions)
app.register(createQuestionsRoute)
app.register(uploadAudioRoute)

app.listen({ port: env.PORT })
