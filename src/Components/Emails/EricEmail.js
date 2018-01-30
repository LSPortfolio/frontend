//makeDraft: {
//     subject: 'Draft in progress',
//     html: 'Progress and body of the email goes in here.'
//   },
//   notify_project_like: data => {
//     return {
//       subject: `${data.user.username} Likes Your Project: ${data.project.name}`,
//       html: `Enter the body of this email here...`
//     }
//   },
//   notify_project_comment: data => {
//     return {
//             subject: `${data.user.username} Commented on Your Project: ${data.project.name}`,
//             html: `Enter the body of this email here...`
//         }

//make draft 
<html>
    Hello ${data.user.username} , 
        Thank you for submitting your project!. Currently your project is a draft,
    so you can customize the display of the project to your liking. 

    -LambdaShowCase 
</html>

//notify project like 
<html>
    Hello ${data.user.username} , 
     ${data.project.name} has just been liked by ${data.user.username} !.
</html>

//notify project comment

<html>
    Hello ${data.user.username} , 
      ${data.project.name} has just received a comment from 
      ${data.user.username} .
</html>