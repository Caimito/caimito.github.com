---
layout: blog-en
title: What Is Continuous Integration
tags: 
- en
- sns-en
- dev-advocate-en
---
## Software Development Without Delays

<p>{{ page.date | date: "%d.%m.%Y" }}, <em>By Stephan Schwab</em></p>

<a href="/en/contact-sns.html"><img src="https://gravatar.com/avatar/663d11426b0a187ddac59f8c17ce61b4?s=120&d=robohash&r=x" class="avatar" /></a>
Continuous Integration (CI) is a practice where team members frequently integrate their work into the main codebase, ensuring that the software product evolves smoothly and efficiently. This article explores the essence of CI, emphasizing the importance of small, frequent contributions, avoiding branching, and leveraging local and automated testing. It also addresses common misconceptions, such as the necessity of a central CI server, and highlights the power of modern developer workstations in facilitating CI practices.

## Continuous Integration Is a Practice
Continuous Integration is something that a team does. It means that all contributions in code or other artifacts from all team members are constantly being integrated into the software product as it gains more and more functionality. It does not matter how the team does this. It does not matter if there is a Continuous Integration server or another tool with "CI" in its name.

Once one team member is done with a small contribution, this contribution gets integrated. *Small* means something that took an hour or two to make. *Small* is not something that takes longer than a day or even more.

## No Branching
As software is made by writing code and code is text, we need a version control system that allows us to merge text from different authors easily. To practice Continuous Integration, we do **not** need branches and much less a system that is good and fast at branching. In fact, we don't want branches at all.

Branches mean that the software system exists multiple times and each version is different. We don't want that. We only want the one and only current version of the system.

That being said, there is nothing wrong with a **local** branch for some experiment here and there. But note that the moment you create a branch, you have effectively stopped practicing Continuous Integration. You can also do your **own** work **locally** in a branch if that makes you feel safer or you are unsure about using the code from that branch. At the moment you want to share the results of your work, you integrate your new code into the one and only main line of the codebase.

## Local and Automated Testing
When practicing Continuous Integration, we want to make sure that we won't break the system with our new code. So we leverage local and automated testing to ensure that everything still works before we share our new code.

We get the latest version of the system from version control, then integrate our work, and finally put the whole thing to a test.

As it is impossible to perform manual testing of the whole system, we need to have meaningful automated tests that also run reasonably fast. Ideally, we want the whole system to be tested in a minute or two but definitely in less than 10 minutes. This process should be enough to get fresh water or coffee but not enough to start new work or be distracted by another activity.

## Is One Big Central CI Server Required?
In 2024, developer workstations or laptops are so powerful that they frequently outperform machines used as servers. While in the past Continuous Integration was associated with having a central CI server running some special software to perform integration builds, for example, Jenkins or GitHub
