export const alertCode = `
<Alert severity={"success"}>This is a success alert!</Alert>
<Alert severity={"error"}>This is an error alert!</Alert>
<Alert severity={"warning"}>This is a warning alert!</Alert>
<Alert severity={"info"}>This is an info alert!</Alert>
`;

export const avatarCode1 = `<Avatar name={"urahara"} size={"small"} source={"https://i.postimg.cc/fTYff9yW/urahichi.gif"} type={"normal"}/>
<Avatar name={"urahara"} size={"medium"} source={"https://i.postimg.cc/fTYff9yW/urahichi.gif"} type={"with-border"}/>`

export const badgeCode = `<Badge icon="message" count={10} label={"mail"}></Badge>
<Badge icon="chat" count={20} label={"chat"}></Badge>
<Badge icon="meeting" count={1} label={"meet"}></Badge>`

export const avatarBadgeCode = `<AvatarBadge type="online"><Avatar name={"urahara"} size={"medium"} source={"https://i.postimg.cc/fTYff9yW/urahichi.gif"} type={"with-border"}/></AvatarBadge>
<AvatarBadge type="away"><Avatar name={"urahara"} size={"medium"} source={"https://i.postimg.cc/fTYff9yW/urahichi.gif"} type={"with-border"}/></AvatarBadge>`

export const commonButton = `
<Button type="outlined-btn">Outlined</Button>
<Button type="elevated-btn">Elevated</Button>
<Button type="filled-btn">Filled</Button>
`

export const linkButton = `
<LinkButton type="outlined-btn" destination={"https://gooogle.com"}>Google</LinkButton>
<LinkButton type="elevated-btn" destination={"/"}>Home page</LinkButton>
<LinkButton type="filled-btn" destination={"/components"}>Components</LinkButton>
`

export const iconButton = `
<IconButton type={"outlined-btn"} icon={"mail"}>Icon button</IconButton>
<IconButton type={"filled-btn"} icon={"logout"}>Logout</IconButton>
`

export const fab = `
<Fab icon={"add"} size={30}>Icon button</Fab>
<Fab icon={"logout"} size={40}>Icon button</Fab>
`