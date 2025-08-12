export const POST = async (req) => {
  const { user, password } = await req.json();
  console.log('Received user:', user);
  console.log('Received password:', password);

  const adminUser = process.env.ADMIN_USER
  const adminPassword = process.env.ADMIN_PASSWORD

  console.log('Admin User:', adminUser)
  console.log('Admin Password:', adminPassword)
  if (!user || !password) {
    return new Response('Missing user or password', { status: 400 })
  }


  if (user === adminUser && password === adminPassword) {
    return new Response('Welcome Admin', { status: 200 })
  }

  return new Response('Unauthorized', { status: 401 })
}