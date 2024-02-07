import prisma from '@/lib/prismadb'
import getUserSesssin from './getUserSession'
import getUserSesssion from './getUserSession'

const getCurrentUser = async () => {
  try {
    const session = await getUserSesssion()
    if(!session?.user?.email){
      return null
    }
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    })
    if (!currentUser) {
      return null
    }
    return currentUser
  } catch (error:any) {
    return null
  }
}
export default getCurrentUser;