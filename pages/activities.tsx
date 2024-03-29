import Image from '../lib/Image';

import ActiviesData from '../data/activities.json'
import Layout from '../components/layout';

const activities = ActiviesData.activities;

export default function Activities() {
    return (
        <Layout>

            <Title />
            <Body />

        </Layout>
        );
}

const Title = () => (

    <section className="section pb-0">
        <div className="container text-center">
            <h1 className="display-3">Atividades</h1>

        </div>
    </section>

);

function Body() {
    return (
        <section className="section">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {activities.map((item, index) => (item.status === "ongoing") ? (
                        <div className="col" id={index.toString()}>
                            <div className="card shadow border rounded-lg p2">
                                <div className="row g-0 h-100">
                                    <div className="col-md-4">
                                        <div className="img-fluid h-100 rounded-start">
                                            <Image src={item.image} alt={item.name + " logo"} layout='responsive' height="100%" width="100%" objectFit="contain" />
                                        </div>
                                    </div>
                                    <div className="col-md-8">

                                        <div className="card-body h-100">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text crop-text-1">{item.summary}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : <></>)}
                </div>

            </div>
        </section>
    );
}

const Egress = () => (
    <section className="section">
        <div className="container">
            <h2 className="text-center">Atividades Realizadas</h2>
        </div>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {activities.map((item, index) => (item.status === "realized") ? (
                    <div className="col" id={index.toString()}>
                        <div className="card shadow border rounded-lg p2">
                            <div className="row g-0 h-100">
                                <div className="col-md-4">
                                    <div className="img-fluid h-100 rounded-start">
                                        <Image src={item.image} alt={item.name + " logo"} layout='responsive' height="100%" width="100%" objectFit="contain" />
                                    </div>
                                </div>
                                <div className="col-md-8">

                                    <div className="card-body h-100">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text crop-text-1">{item.summary}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                ) : <></>)}
            </div>

        </div>
    </section>
);
