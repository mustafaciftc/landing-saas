import React from 'react';
import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';

const SaaSLanding = () => {
    return (
        <div className="bg-white text-dark saas-landing">
            <Navbar bg="white" expand="lg" fixed="top" className="py-3 navbar-custom shadow-sm">
                <Container>
                    <Navbar.Brand href="#" className="fs-3 fw-bold text-primary">SaaSify</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-4">
                            <Nav.Link href="#features" className="fw-medium">Features</Nav.Link>
                            <Nav.Link href="#pricing" className="fw-medium">Pricing</Nav.Link>
                            <Nav.Link href="#testimonials" className="fw-medium">Testimonials</Nav.Link>
                        </Nav>
                        <Button variant="primary" className="d-none d-lg-block rounded-pill px-4">Get Started</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div style={{ paddingTop: '80px' }}>
                <section className="py-5 hero-section">
                    <Container className="text-center py-5">
                        <div className="mb-5">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="SaaS Dashboard"
                                className="img-fluid rounded-3 shadow mb-4"
                                style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
                            />
                        </div>
                        <h2 className="display-3 fw-bold mb-4">
                            Grow Your Business with SaaSify
                        </h2>
                        <p className="lead text-muted mb-4">
                            A modern SaaS solution that scales with your needs.
                        </p>
                        <Button variant="primary" size="lg" className="rounded-pill px-4">Start Free Trial</Button>
                    </Container>
                </section>

                <section id="features" className="py-5 features-section">
                    <Container>
                        <Row className="g-4">
                            {[
                                {
                                    title: "Cloud Based",
                                    desc: "Access your data anywhere, anytime with our secure cloud infrastructure.",
                                    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                },
                                {
                                    title: "Secure",
                                    desc: "Enterprise-grade security with encryption and compliance standards.",
                                    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                },
                                {
                                    title: "Scalable",
                                    desc: "Grow from startup to enterprise without changing platforms.",
                                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                },
                            ].map((item, i) => (
                                <Col md={4} key={i}>
                                    <Card className="h-100 border-0 shadow-sm text-center p-4 feature-card">
                                        <div className="text-center mb-4">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="img-fluid rounded-3"
                                                style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                                            />
                                        </div>
                                        <Card.Body className="p-0">
                                            <Card.Title as="h3" className="fs-4 fw-bold mb-3">{item.title}</Card.Title>
                                            <Card.Text className="text-muted">{item.desc}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                <section id="pricing" className="py-5 bg-light pricing-section">
                    <Container>
                        <h2 className="display-5 fw-bold text-center mb-5">Pricing Plans</h2>
                        <Row className="g-4 justify-content-center">
                            {[
                                {
                                    name: "Basic",
                                    price: "19",
                                    features: ["Up to 10 users", "5GB storage", "Basic support", "Email assistance"]
                                },
                                {
                                    name: "Pro",
                                    price: "49",
                                    features: ["Up to 50 users", "50GB storage", "Priority support", "24/7 chat support", "Advanced analytics"]
                                },
                                {
                                    name: "Enterprise",
                                    price: "99",
                                    features: ["Unlimited users", "500GB storage", "Dedicated manager", "Custom integrations", "SLA guarantee"]
                                },
                            ].map((plan, i) => (
                                <Col lg={4} md={6} key={i}>
                                    <Card className="h-100 border-0 shadow text-center pricing-card">
                                        <Card.Body className="p-5">
                                            <Card.Title as="h3" className="fs-3 fw-bold mb-3">{plan.name}</Card.Title>
                                            <p className="text-muted fs-4 fw-semibold mb-4">
                                                ${plan.price}/mo
                                            </p>
                                            <div className="mb-4">
                                                {plan.features.map((feature, idx) => (
                                                    <div key={idx} className="text-muted mb-2">
                                                        ✓ {feature}
                                                    </div>
                                                ))}
                                            </div>
                                            <Button variant={i === 1 ? "primary" : "outline-primary"} className="w-100 rounded-pill">
                                                Choose Plan
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                <section id="testimonials" className="py-5 testimonials-section">
                    <Container>
                        <h2 className="display-5 fw-bold text-center mb-5">What Our Clients Say</h2>
                        <Row className="g-4">
                            {[
                                {
                                    review: "Amazing service! SaaSify transformed our business operations completely. The platform is intuitive and the analytics helped us grow 200% in just 6 months.",
                                    name: "Sarah Johnson",
                                    position: "CEO, TechInnovate",
                                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                },
                                {
                                    review: "Highly recommend! The platform is intuitive and the support team is exceptional. They helped us integrate with our existing systems seamlessly.",
                                    name: "Michael Chen",
                                    position: "CTO, DataFlow Inc",
                                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                },
                                {
                                    review: "The best decision we made was switching to SaaSify. The scalability allowed us to handle rapid growth without any hiccups.",
                                    name: "Emma Rodriguez",
                                    position: "Operations Director, GrowthLabs",
                                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                },
                                {
                                    review: "Outstanding customer service and a product that delivers on its promises. Our team productivity increased by 45% since implementation.",
                                    name: "James Wilson",
                                    position: "IT Manager, Enterprise Solutions",
                                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                },
                            ].map((testimonial, i) => (
                                <Col lg={6} key={i}>
                                    <Card className="h-100 border-0 shadow-sm testimonial-card">
                                        <Card.Body className="p-4">
                                            <div className="d-flex align-items-center mb-4">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="rounded-circle me-3"
                                                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                                />
                                                <div>
                                                    <Card.Title as="h4" className="fw-bold mb-0">{testimonial.name}</Card.Title>
                                                    <small className="text-muted">{testimonial.position}</small>
                                                </div>
                                            </div>
                                            <Card.Text className="text-muted mb-0 fs-5">"{testimonial.review}"</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                <section className="py-5 bg-primary text-white cta-section">
                    <Container className="text-center py-5">
                        <div className="mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Get Started"
                                className="img-fluid rounded-3"
                                style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
                            />
                        </div>
                        <h2 className="display-5 fw-bold mb-4">
                            Ready to Boost Your Business?
                        </h2>
                        <Button variant="light" size="lg" className="rounded-pill px-4">Get Started</Button>
                    </Container>
                </section>

                <footer className="bg-dark text-light py-5">
                    <Container className="text-center">
                        <img
                            src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                            alt="SaaSify Logo"
                            className="mb-3"
                            style={{ height: '50px' }}
                        />
                        <p className="mb-0">© {new Date().getFullYear()} SaaSify. All rights reserved.</p>
                    </Container>
                </footer>
            </div>
        </div>
    )
}

export default SaaSLanding;