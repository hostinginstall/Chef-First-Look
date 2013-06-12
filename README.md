# Chef = Configuration Management Software

• System Operators use Chef to build services

• Chef environment is a folder called a [Kitchen / chef-repo](https://learnchef.opscode.com/quickstart/chef-repo/)

• The program to deploy services is called [knife](http://docs.opscode.com/knife.html)

• All the cooking stays in the Kitchen

<br><br>

# What is Chef?
- [Opscode - Code Can / Homepage](http://www.opscode.com)
- [Configuration Management Software](http://www.opscode.com/solutions/configuration-management/#how-it-works)
- [Products - Chef](http://www.opscode.com/chef/)
- [Products - Private Chef with 24/7/365 support](http://www.opscode.com/private-chef/)
- [Products - Hosted Chef, free trial](http://www.opscode.com/hosted-chef/)
- [Solutions - Configuration Management](http://www.opscode.com/solutions/configuration-management/)
- [Chef Training](http://www.opscode.com/services/#training)
- [Contact Opscode Sales](http://pages.opscode.com/contact-us.html)

<br><br>

# [Kitchen/](https://github.com/opscode/chef-repo)

[Cookbooks](http://docs.opscode.com/essentials_cookbooks.html) are service configurations

Cookbooks: Apache, MySQL, IIS, MS SQL, Oracle, 
Active Directory, LVM, NAS, NTP- timezone 

[Cheffile](https://github.com/applicationsonline/librarian-chef) - Bookshelf containing the cookbooks

[Nodes](http://docs.opscode.com/chef_overview_nodes.html) - Specifications of how a server should be built

[Roles](http://docs.opscode.com/essentials_roles.html) - Policy and Product provisioning

<br><br>

# Reading
- **[Chef Documentation](http://docs.opscode.com)**
- **[Getting Started - learnchef.opscode.com](https://learnchef.opscode.com/quickstart)**
- [Chef Wiki](http://wiki.opscode.com/display/chef/Home)
- [Chef Cookbooks (App Store) 900+ cookbooks](http://community.opscode.com)
- [Opscode Chef Blog](http://www.opscode.com/blog/)

## Getting Started
- [Workstation Setup](https://learnchef.opscode.com/quickstart/workstation-setup/)
- [Install Chef](http://www.opscode.com/chef/install/), [Docs to install Chef 11 on a workstation](http://docs.opscode.com/install_workstation.html)

<br><br>

# [Videos](http://www.youtube.com/user/opscode)
- [Opscode Channel](http://www.youtube.com/user/opscode)
- **[Why Chef was created. History of Chef: What's in a Name? 4m]
(http://www.youtube.com/watch?v=Ia2ItmjRsw8)**
- [Chef: Giving You the Creativity to Succeed](http://www.youtube.com/watch?v=fMasrPeHVaI)

<br>

- [Opscode Chef #ChefConf Keynote Session - Christopher Brown & Mitch Hill 42m 2013]
(https://www.youtube.com/watch?v=erU1UOlmlvI)
 * Technology changes much fast than the typical textbook and coursework certification process 19m
 * **Solaris, Windows 2003, 2008, 2012 Support 29m**
 * Ruled the cloud - Chef Cloud Providers 31m05s
 * **Opscode Manage Reporting Website 34m**

<br>

- **[Demo: Opscode Chef & Windows Azure 17m]
(http://www.youtube.com/watch?v=il8lI7_FHP4)**
 - What is Chef
 - Infrastructure as code 2m30s
 - Knife/Azure Object Model 4m21s
 - Roles 7m18s
 - Demo 10m10s

<br>

- [Opscode Chef State of the Union Part 1: Chef, Past and Present 59m - 2012]
(http://www.youtube.com/watch?v=bAWjqE5FCxI)

- [Opscode Chef State of the Union Part 2: Chef, the Future 1h 05m - 2012]
(http://www.youtube.com/watch?v=Lv89JG81-9M)

- [Scaling systems configuration at Facebook - Phil Dibowitz 42m]
(http://www.youtube.com/watch?v=SYZ2GzYAw_Q)
 * You can run Facebook size clusters on Open Source Chef 23m00s
 * 4 people to run 17k nodes 40m

- [DEVOPS + Chef + Windows at Ancestry.com 47m]
(http://www.youtube.com/watch?v=pF5ya0q53kk)

<br><br>

# Who is using Chef
- [Microsoft - Windows Azure](http://www.opscode.com/partners/microsoft/)
- [Rackspace - Private Cloud](http://www.opscode.com/press-releases/rackspace-delivers-opscode-chef-with-rackspace-private-cloud/)
 - [knife-rackspace](https://github.com/opscode/knife-rackspace)
- [Facebook - cloud automation](http://www.zdnet.com/facebook-taps-opscode-for-cloud-automation-7000010761/)
- [Google Compute Engine](http://www.opscode.com/press-releases/opscode-announces-integration-with-google-compute-engine/)
 - [knife-google](https://github.com/opscode/knife-google), [Blog post Knife Plugin for Google Compute Engine](http://www.opscode.com/blog/2013/05/14/just-released-update-to-knife-plugin-for-google-compute-engine/)
- [HP Cloud](https://www.hpcloud.com/partner/opscode)
 - [Knife-hp](https://github.com/mattray/knife-hp)
 - [Working with HP Cloud](http://www.opscode.com/blog/2012/03/09/working-with-knife-and-hp-cloud-services/)
- [Amazon Web Services](https://aws.amazon.com/solution-providers/isv/opscode)
  - [knife-ec2](https://github.com/opscode/knife-ec2)
- [IBM](http://www.opscode.com/blog/2013/04/25/opscode-and-ibm-join-forces-to-bring-open-source-cloud-automation-to-the-enterprise/)
- [Cycle Computing](http://www.opscode.com/customers/cycle-computing/)

[Check out the Keynote](http://htmlpreview.github.io/?https://github.com/hostinginstall/Chef-First-Look/blob/master/Keynote.html)
![Chef Car](Keynote_files/chef-car.png)