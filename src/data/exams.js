const exams =  [
		{
			"name": "AWS Certified Cloud Practitioner",
            "logo":  null,
			"domains": [
				{
					"name": "Domain 1: Cloud Concepts",
					"task_statements": [
						{
							"name": "1.1 Define the benefits of the AWS Cloud",
							"goal": "Tests wether the individual understands the value proposition of using cloud based services, AWS services in particular",
							"skills": [
								"understanding the economies of associated with using the cloud e.g. cost savings",
								"understanding the benefits of using global infrastructure e.g. speed of deployment, global reach",
								"understanding the advantages of high availability, elasticity, and agility"
							],
							"training_questions": [
								"What are benefits of using the AWS Cloud for companies with customers in many countries around the world? (Select TWO.)"
							]
						},
						{
							"name": "1.2: Identify design principles of the AWS Cloud",
							"goal": "Tests wether the individual understands the fundamentals of the AWS well-architected framework",
							"skills": [
								"understanding the pillars of the Well-Architected Framework e.g. operational excellence, security, reliability, performance efficiency, cost optimization, sustainability",
								"Identifying differences between the pillars of the Well-Architected Framework"
							],
							"training_questions": [
								"A user deploys an Amazon RDS DB instance in multiple Availability Zones. This strategy involves which pillar of the AWS Well-Architected Framework?"
							]
						},
						{
							"name": "1.3: Understand the benefits of and strategies for migration to the AWS Cloud",
							"goal": "Tests wether the individual understands cloud adoptions strategies and the AWS resources to support cloud migration",
							"skills": [
								"Understanding the benefits of the AWS Cloud Adoption Framework e.g.educed business risk; improved environmental, social,and governance (ESG) performance; increased revenue; increased operational efficiency ",
								"Identifying appropriate migration strategies e.g. database replication, use of AWS Snowball"
							],
							"training_questions": [
								"A company has an on-premises Linux-based server with an Oracle database that runs on it. The company wants to migrate the database server to run on an Amazon EC2 instance in AWS. Which service should the company use to complete the migration?"
							]
						},
						{
							"name": "1.4: Understand concepts of cloud economics",
							"goal": "Tests wether the individual understands aspects of cloud economics and the cost saving benefits of moving to the cloud",
							"skills": [
								"Understanding the role of fixed costs compared with variable costs",
								"Understanding costs that are associated with on-premises e.g. Bring Your Own License [BYOL] model compared with included licenses",
								"Understanding the concept of rightsizing",
								"Identifying benefits of automation e.g. provisioning and configuration management with AWS CloudFormation",
								"Identifying managed AWS services e.g.  Amazon RDS, Amazon Elastic Container Service [Amazon ECS], Amazon Elastic Kubernetes Service [Amazon EKS], Amazon DynamoDB"
							],
							"training_questions": [
								"How does AWS charge for AWS Lambda usage once the free tier has been exceeded? (Select TWO)"
							]
						}
					]
				},
				{
					"name": "Domain 2: Security and Compliance",
					"task_statements": [
						{
							"name": "2.1 Understand the AWS shared responsibility model",
							"goal": "Tests whether the individual understands the shared responsibility model used by AWS and how responsibilities are divided between AWS and its customers",
							"skills": [
								"recognizing the components of the AWS shared responsibility model",
								"describing the customer’s responsibilities on AWS",
								"describing AWS responsibilities",
								"describing responsibilities that the customer and AWS share",
								"describing how AWS responsibilities and customer responsibilities can shift depending on the service used, such as Amazon RDS, AWS Lambda, or Amazon EC2"
							],
							"training_questions": [
								"Which tasks are the customer's responsibility according to the AWS shared responsibility model? (Select TWO.)"
							]
						},
						{
							"name": "2.2 Understand AWS Cloud security, governance, and compliance concepts",
							"goal": "Tests whether the individual understands AWS security, governance, and compliance concepts, including how to secure resources and meet compliance requirements",
							"skills": [
								"identifying where to find AWS compliance information, such as AWS Artifact",
								"understanding compliance needs across geographic locations or industries, such as AWS Compliance",
								"describing how customers secure resources on AWS using services like Amazon Inspector, AWS Security Hub, Amazon GuardDuty, or AWS Shield",
								"identifying different encryption options, such as encryption in transit and encryption at rest",
								"recognizing services that aid in governance and compliance, such as monitoring with Amazon CloudWatch, auditing with AWS CloudTrail, AWS Audit Manager, and AWS Config, or reporting with access reports",
								"recognizing compliance requirements that vary among AWS services"
							],
							"training_questions": [
								"A company needs to monitor and receive alerts about AWS Management Console sign-in events that involve the AWS account root user. Which AWS service can the company use to meet these requirements?"
							]
						},
						{
							"name": "2.3 Identify AWS access management capabilities",
							"goal": "Tests whether the individual understands AWS identity and access management capabilities, including access controls, user privileges, and root user protection",
							"skills": [
								"understanding access keys, password policies, and credential storage using services like AWS Secrets Manager and AWS Systems Manager",
								"identifying authentication methods in AWS, such as multi-factor authentication (MFA), IAM Identity Center, and cross-account IAM roles",
								"defining groups, users, custom policies, and managed policies in line with the principle of least privilege",
								"identifying tasks that only the account root user can perform",
								"understanding methods for protecting the root user account",
								"understanding different types of identity management, such as federated identity management"
							],
							"training_questions": [
								"Which credential components are required to gain programmatic access to an AWS account? (Select TWO.)"
							]
						},
						{
							"name": "2.4 Identify components and resources for security",
							"goal": "Tests whether the individual understands the security capabilities and resources provided by AWS, including security features, documentation, and third-party products",
							"skills": [
								"describing AWS security features and services, such as security groups, network ACLs, and AWS WAF",
								"understanding that third-party security products are available from AWS Marketplace",
								"identifying where AWS security information is available, such as AWS Knowledge Center, AWS Security Center, and AWS Security Blog",
								"understanding how to use AWS services, like AWS Trusted Advisor, for identifying security issues"
							],
							"training_questions": [
								"Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?"
							]
						}
					]
				},
				{
					"name": "Domain 3: Cloud Technology and services",
					"task_statements": [
						{
							"name": "3.1 Define methods of deploying and operating in the AWS Cloud",
							"goal": "Tests whether the individual understands different methods of provisioning, operating, and accessing services in the AWS Cloud, as well as various cloud deployment models and connectivity options",
							"skills": [
								"deciding between options such as programmatic access using APIs, SDKs, or CLI, the AWS Management Console, and infrastructure as code (IaC)",
								"evaluating requirements to determine whether to use one-time operations or repeatable processes",
								"identifying different deployment models, such as cloud, hybrid, and on-premises",
								"identifying connectivity options, such as AWS VPN, AWS Direct Connect, and public internet"
							],
							"training_questions": [
								"A company wants to establish a consistent and private connection from the company's on-premises data center to the AWS Cloud.Which AWS service will meet these requirements?",
								"A company requires an encrypted connection between the company's on-premises servers and AWS. The connection must use the company's existing internet connection. Which solution will meet these requirements?"
							]
						},
						{
							"name": "3.2 Define the AWS global infrastructure",
							"goal": "Tests whether the individual understands the components of AWS global infrastructure, such as Regions, Availability Zones, edge locations, and the importance of high availability",
							"skills": [
								"describing relationships among Regions, Availability Zones, and edge locations",
								"describing how to achieve high availability by using multiple Availability Zones",
								"recognizing that Availability Zones do not share single points of failure",
								"describing when to use multiple Regions, such as for disaster recovery, business continuity, low latency for end users, or data sovereignty",
								"describing the benefits of edge locations, such as through Amazon CloudFront or AWS Global Accelerator"
							],
							"training_questions": [
								"What are the advantages of deploying an application with Amazon EC2 instances in multiple Availability Zones? (Select TWO.)"
							]
						},
						{
							"name": "3.3 Identify AWS compute services",
							"goal": "Tests whether the individual understands AWS compute services and can identify the appropriate use of different compute options, such as EC2, containers, and serverless solutions",
							"skills": [
								"recognizing the appropriate use of different EC2 instance types, such as compute optimized and storage optimized",
								"recognizing the appropriate use of different container options, such as Amazon ECS and Amazon EKS",
								"recognizing the appropriate use of different serverless compute options, such as AWS Fargate and AWS Lambda",
								"recognizing that auto scaling provides elasticity",
								"identifying the purposes of load balancers"
							],
							"training_questions": []
						},
						{
							"name": "3.4 Identify AWS database services",
							"goal": "Tests whether the individual understands AWS database services and can identify when to use different types of databases and migration tools",
							"skills": [
								"deciding when to use EC2-hosted databases or AWS managed databases",
								"identifying relational databases, such as Amazon RDS and Amazon Aurora",
								"identifying NoSQL databases, such as DynamoDB",
								"identifying memory-based databases",
								"identifying database migration tools, such as AWS Database Migration Service (AWS DMS) and AWS Schema Conversion Tool (AWS SCT)"
							],
							"training_questions": [
								"A company requires a relational database on AWS that records new customer orders from a website.Which AWS service or feature will meet this requirement?"
							]
						},
						{
							"name": "3.5 Identify AWS network services",
							"goal": "Tests whether the individual can identify and understand the various network services offered by AWS",
							"skills": [
								"identifying the components of a VPC e.g. subnets, gateways",
								"understanding security in a VPC e.g. network ACLs, security groups",
								"understanding the purpose of Amazon Route 53",
								"identifying edge services e.g. CloudFront, Global Accelerator",
								"identifying network connectivity options to AWS e.g. AWS VPN, Direct Connect"
							],
							"training_questions": [
								"A company is hosting a static website from a single Amazon S3 bucket.  Which AWS service will achieve lower latency and high transfer speeds?"
							]
						},
						{
							"name": "3.6 Identify AWS storage services",
							"goal": "Tests whether the individual can identify and distinguish various AWS storage services and their use cases.",
							"skills": [
								"identifying the uses for object storage",
								"recognizing the differences in Amazon S3 storage classes",
								"identifying block storage solutions e.g. Amazon Elastic Block Store, instance store",
								"identifying file services e.g. Amazon Elastic File System, Amazon FSx",
								"identifying cached file systems e.g. AWS Storage Gateway",
								"understanding use cases for lifecycle policies",
								"understanding use cases for AWS Backup"
							],
							"training_questions": [
								"Which of the functionalities are characteristics of Amazon S3? (Select TWO.)"
							]
						},
						{
							"name": "3.7 Identify AWS artificial intelligence and machine learning (AI/ML) services and analytics services",
							"goal": "Tests whether the individual can recognize and understand the various AI/ML and analytics services offered by AWS",
							"skills": [
								"understanding the different AI/ML services and the tasks that they accomplish e.g. Amazon SageMaker, Amazon Lex, Amazon Kendra",
								"identifying the services for data analytics e.g. Amazon Athena, Amazon Kinesis, AWS Glue, Amazon QuickSight"
							],
							"training_questions": [
								"A company wants to create a learning application for students. The learning application must give students the option to choose a button to have the text read out loud to them.Which AWS machine learning service will meet this requirement?"
							]
						},
						{
							"name": "3.8 Identify services from other in-scope AWS service categories",
							"goal": "Tests whether the individual can identify appropriate AWS services from various categories based on specific use cases.",
							"skills": [
								"choosing the appropriate service to deliver messages and to send alerts and notifications",
								"choosing the appropriate service to meet business application needs",
								"choosing the appropriate service for AWS customer support",
								"choosing the appropriate option for business support assistance",
								"identifying the tools to develop, deploy, and troubleshoot applications",
								"identifying the services that can present the output of virtual machines (VMs) on end-user machines",
								"identifying the services that can create and deploy frontend and mobile services",
								"identifying the services that manage IoT devices"
							],
							"training_questions": [
								"A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3. Which AWS service can meet these requirements?",
								"A company is moving all of their development activities to AWS. The company wants a solution to store and manage their developers' source code.Which AWS coding service will meet this requirement?"
							]
						}
					]
				},
				{
					"name": "Domain 4: Billing, Pricing, and Support",
					"task_statements": [
						{
							"name": "4.1 Compare AWS pricing models",
							"goal": "Tests whether the individual can evaluate and differentiate between various AWS pricing models and their applications.",
							"skills": [
								"identifying and comparing when to use various compute purchasing options",
								"describing Reserved Instance flexibility",
								"describing Reserved Instance behavior in AWS Organizations",
								"understanding incoming data transfer costs and outgoing data transfer costs e.g. from one Region to another Region, within the same Region",
								"understanding different pricing options for various storage options"
							],
							"training_questions": [
								"Which AWS service allows customers to purchase unused Amazon EC2 capacity at an often discounted rate?"
							]
						},
						{
							"name": "4.2 Understand resources for billing, budget, and cost management",
							"goal": "Tests whether the individual understands the resources and tools available for managing billing, budgets, and costs within AWS.",
							"skills": [
								"understanding the appropriate uses and capabilities of AWS Budgets, AWS Cost Explorer, and AWS Billing Conductor",
								"understanding the appropriate uses and capabilities of AWS Pricing Calculator",
								"understanding AWS Organizations consolidated billing and allocation of costs",
								"understanding various types of cost allocation tags and their relation to billing reports e.g. AWS Cost and Usage Report"
							],
							"training_questions": [
								"Each department within a company has its own independent AWS account and its own payment method. The company needs to centralize departmental governance and consolidate payments.How can the company achieve these objectives by using AWS services or features?"
							]
						},
						{
							"name": "4.3 Identify AWS technical resources and AWS Support options",
							"goal": "Tests whether the individual can locate and understand various AWS technical resources and support options available to users.",
							"skills": [
								"locating AWS whitepapers, blogs, and documentation on official AWS websites",
								"identifying and locating AWS technical resources e.g. AWS Prescriptive Guidance, AWS Knowledge Center, AWS re:Post",
								"identifying AWS Support options for AWS customers e.g. customer service and communities, AWS Developer Support, AWS Business Support, AWS Enterprise On-Ramp Support, AWS Enterprise Support",
								"identifying the role of Trusted Advisor, AWS Health Dashboard, and the AWS Health API to help manage and monitor environments for cost optimization",
								"identifying the role of the AWS Trust and Safety team to report abuse of AWS resources",
								"understanding the role of AWS Partners e.g. AWS Marketplace, independent software vendors, system integrators",
								"identifying the benefits of being an AWS Partner e.g. partner training and certification, partner events, partner volume discounts",
								"identifying the key services that AWS Marketplace offers e.g. cost management, governance and entitlement",
								"identifying technical assistance options available at AWS e.g. AWS Professional Services, AWS Solutions Architects"
							],
							"training_questions": [
								"What is the MINIMUM AWS Support plan that provides technical support through phone calls?"
							]
						}
					]
				}
			]
		},
		{
			"name": "AWS Certified Developer - Associate",
			"domains": [
				{
					"name": "Domain 1: Development with AWS",
					"task_statements": []
				},
				{
					"name": "Domain 2: Security",
					"task_statements": []
				},
				{
					"name": "Domain 3: Deployment",
					"task_statements": []
				},
				{
					"name": "Domain 4: Troubleshooting and optimization",
					"task_statements": []
				}
			]
		},
		{
			"name": "AWS Certified Solution Architect - Associate",
			"domains": [
				{
					"name": "Domain 1: Design Secure Architectures",
					"task_statements": []
				},
				{
					"name": "Domain 2: Design Resilient Architectures",
					"task_statements": []
				},
				{
					"name": "Domain 3: Design High-Performing Architectures",
					"task_statements": []
				},
				{
					"name": "Domain 4: Design Cost-Optimized Architectures",
					"task_statements": []
				}
			]
		},
		{
			"name": "AWS Certified DevOps Engineer - Professional",
			"domains": [
				{
					"name": "Domain 1: SDLC Automation",
					"task_statements": []
				},
				{
					"name": "Domain 2: Configuration Management and IaC",
					"task_statements": []
				},
				{
					"name": "Domain 3: Resilient Cloud Solutions",
					"task_statements": []
				},
				{
					"name": "Domain 4: Monitoring and Logging",
					"task_statements": []
				},
				{
					"name": "Domain 5: Incident and Event Response",
					"task_statements": []
				},
				{
					"name": "Domain 6: Security and Compliance",
					"task_statements": []
				}
			]
		}
	]


export default exams