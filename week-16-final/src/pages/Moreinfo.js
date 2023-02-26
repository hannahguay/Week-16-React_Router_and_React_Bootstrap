import React from 'react';
import Header from '../components/Header';

//components
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';
import Footer from '../components/Footer'

const Moreinfo = () => {
  return (
    <div>
      <Header />
      <Container>
              <div className='d-flex justify-content-center'>
                <Card className="min-vw-75" style={{ backgroundColor: '#e3e3e3', marginTop: 40 }} >
                  <Card.Title className='d-flex justify-content-center' style={{ marginBottom: 0, marginTop: 10 }}></Card.Title>
                  <Card.Body>
                    <p align='left' ><h2 align='center' >What are the benefits of a daily todo list?</h2><br></br>
                  The benefits of using a daily to-do list range from higher productivity to better mental health. It might also have a major impact on your personal life, as you can be more productive at work and enjoy your personal time without stress. Regularly creating a list can help you track your short-term goals, ideas, and, accomplishments, while having an overall positive effect on your career. Below are some benefits of setting up a daily to-do list. <br></br>
                  <br></br>
                  <h4>Increases productivity</h4>
                  At work and at home, having a to-do list may help you prioritize your work and personal tasks. This allows you to organize and complete the most crucial tasks first. To-do lists can be used to improve time management because all of your tasks are laid out clearly in advance. You can more easily decide what to do after you complete a task and move on to the next item on the list.
                  <h4>Provides motivation</h4>
                  Too many tasks to remember can be overwhelming, but with the proper motivation, you can accomplish more and reduce stress. Having a to-do list makes it easier to organize everything that you want to accomplish in the day so that you can start fresh the next. Physically crossing items off a list can also increase motivation.
                  Being unmotivated can make you less likely to complete items on your to-do list. Finding intrinsic and extrinsic motivation is important. Intrinsic motivation is an internal source of encouragement. For example, a bookworm might finish a novel because they love reading and not because they have to do it for an assignment. Extrinsic motivation is an outside source that inspires you. An example of this is cleaning the house because coworkers are visiting for a business dinner. Thinking about your intrinsic and extrinsic sources of motivation can help you plan out how to complete tasks.
                  <h4>Improves memory</h4>
                  Creating and maintaining a daily to-do list can help improve your overall memory by reinforcing your short-term memory. By writing tasks and short-term goals and continually checking the list, you might retain more information. Making a list every day can improve memory and may assist you in making sure all your important tasks get completed on time.
                  Reduces stress
                  Planning the activities you want to complete each day can help declutter your life and remove a sense of being overwhelmed by everything that needs to be done. Make sure that you do not plan too much in one day. Be realistic about how much you can accomplish.
                  Putting too many tasks on your to-do list can cause stress through the constant reminder of the pending tasks, so it's best to keep your lists small and manageable. If you complete everything on the list and you still want to do more, create another list and start with that. Finish the most important activities first and save any tasks that can wait until the next day.
                  Allows for more personal time
                  Between working at the office, attending meetings, doing chores, and going to appointments, try to make time for the activities you enjoy. A to-do list can help you organize your time and finish your tasks more efficiently, giving you more free time. Plan out each task, along with the time it may reasonably take. If you're honest with yourself and commit to your schedule, you can find more time to relax and enjoy your hobbies.
                  <h4>Reduces anxiety and improves mental health</h4>
                  Being able to reduce anxiety is an important part of a balanced life. Organizing your schedule with a to-do list can improve your mental health by resolving uncertainty and allowing you to see all the activities you plan to accomplish throughout the day. The act of completing tasks can also provide an ego boost, reassuring you of your capabilities. The satisfaction of checking a task off your list and moving toward a new goal can increase your self-confidence. Having higher self-esteem can improve your overall mental health and provide a better outlook on life.
                  <h4>Provides a sense of accomplishment</h4>
                  Completing tasks and having a physical action, such as crossing them off a list, can provide a sense of accomplishment. Accomplishing a task can boost morale and improve productivity. Even if it's as simple as making your bed, completing a task is a powerful motivator for many people.
                  Give yourself a reward when you complete a task before you move on to another one. You can also take a moment to appreciate all your hard work. When you write a daily to-do list, you create accountability for yourself. So, when you complete all the tasks on the list, it's good to reward yourself to maintain your motivation.</p>
                  </Card.Body>
                </Card>
              </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Moreinfo