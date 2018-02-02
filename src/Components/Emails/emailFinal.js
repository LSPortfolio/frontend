module.exports = {
    welcome: {
        subject: 'Welcome to the showcase!',
        html: `<html>Hello, welcome to the Lambda Showcase Portfolio. We would like to show off our exciting projects to display Lambda Students' creative minds. Recruiters are invited to email students to further discuss their projects and their future goals. We welcome you to our community, and if you have any additional questions, please <a href='https://lambdaschool.com/contact'>contact us</a>!</html>`
    },
    resetPassword: {
        subject: 'Change Password',
        html: token => `<html>Click <a href="https://lambdashowcase.com/user/changepw?token=${token}">here</a> to reset your password!</html>`
    },
    pwResetSuccess: {
        subject: 'Lambda Showcase Password Change',
        html: `<html>Your password has been successfully changed!</html>`
    },
    makeLive: {
        subject: 'Project Now Live',
        html: `<html>Congratulations, your project has gone live!</html>`
    },
    makeDraft: {
        subject: 'Draft in Progress',
        html: `<html>Hello ${data.user.username}, Thank you for submitting your project!. Currently your project is a draft, so you can customize the display of the project to your liking. -LambdaShowCase </html>`
    },
    notify_project_like: data => {
        return {
            subject: `${data.user.username} Likes Your Project: ${data.project.name}`,
            html: `<html>
            Hello ${data.user.username}, ${data.project.name} has just been liked by ${data.user.username}!</html>`
        }
    },
    notify_project_comment: data => {
        return {
            subject: `${data.user.username} Commented on Your Project: ${data.project.name}`,
            html: `Enter the body of this email here...`
        }
    }
}