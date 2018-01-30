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
        html: 'Progress and body of the email goes in here.'
    },
    notify_project_like: data => {
        return {
            subject: `${data.user.username} Likes Your Project: ${data.project.name}`,
            html: `Enter the body of this email here...`
        }
    },
    notify_project_comment: data => {
        return {
            subject: `${data.user.username} Commented on Your Project: ${data.project.name}`,
            html: `Enter the body of this email here...`
        }
    }
}