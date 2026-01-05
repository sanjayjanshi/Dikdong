// Current page state
        let currentPage = 'home';
        const pageHistory = [];
        let currentCourse = '';
        let currentSpecialization = '';
        
        // Course
        const courses = {
            bpharm: {
                name: "Bachelor of Pharmacy (B.Pharm)",
                semesters: 8,
                subjects: {
                    1: [
                        { name: "Human Anatomy and Physiology I", code: "BP101T", credits: 4, hours: 4, units: {1: "Introduction to human body, Cellular level of organization, Tissue level of organization", 2: "Integumentary system, Skeletal system", 3: "Body fluids and blood, Lymphatic system", 4: "Peripheral nervous system, Special senses", 5: "Cardiovascular system"} },
                        { name: "Pharmaceutical Analysis I", code: "BP102T", credits: 4, hours: 4, units: {1: "Pharmaceutical analysis - Definition and scope, Errors, Pharmacopoeia, Sources of impurities", 2: "Acid base titration, Non aqueous titration", 3: "Precipitation titrations, Complexometric titration, Gravimetry, Diazotisation titration", 4: "Redox titrations", 5: "Electrochemical methods of analysis"} },
                        { name: "Pharmaceutics I", code: "BP103T", credits: 4, hours: 4, units: {1: "Historical background and development of profession of pharmacy, Dosage forms, Prescription, Posology", 2: "Pharmaceutical calculations, Powders, Liquid dosage forms", 3: "Monophasic liquids, Biphasic liquids", 4: "Suppositories, Pharmaceutical incompatibilities", 5: "Semisolid dosage forms"} },
                        { name: "Pharmaceutical Inorganic Chemistry", code: "BP104T", credits: 4, hours: 4, units: {1: "Impurities in pharmaceutical substances, Limit tests", 2: "Acids, Bases, Buffers, Major electrolytes, Dental products", 3: "Gastrointestinal agents", 4: "Expect orants, Haematinics, Poison and Antidotes, Astringents", 5: "Radiopharmaceuticals"} },
                        { name: "Communication Skills", code: "BP105T", credits: 4, hours: 4, units: {1: "Communication Skills, Barriers to communication", 2: "Perspectives in Communication", 3: "Elements of Communication", 4: "Communication Styles", 5: "Basic Listening Skills, Effective Written Communication, Interview Skills, Giving Presentations"} },
                        { name: "Remedial Biology", code: "BP106RBT", credits: 4, hours: 4, units: {1: "Living world, Morphology of Flowering plants", 2: "Body fluids and circulation, Digestion and Absorption, Breathing and respiration", 3: "Excretory products and their elimination, Neural control and coordination, Chemical coordination and regulation", 4: "Plants and mineral nutrition, Photosynthesis", 5: "Plant respiration, Plant growth and development, Cell - The unit of life, Tissues"} },
                        { name: "Remedial Mathematics", code: "BP106RMT", credits: 4, hours: 4, units: {1: "Partial fraction, Logarithms, Function, Limits and continuity", 2: "Matrices and Determinant", 3: "Calculus - Differentiation", 4: "Analytical geometry - Introduction to Analytical geometry, Straight Line", 5: "Integral Calculus, Differential Equations, Laplace transform"} }
                    ],
                    2: [
                        { name: "Human Anatomy and Physiology II", code: "BP201T", credits: 4, hours: 4, units: {1: "Nervous system", 2: "Digestive system, Energetics", 3: "Respiratory system, Urinary system", 4: "Endocrine system", 5: "Reproductive system, Introduction to genetics"} },
                        { name: "Pharmaceutical Organic Chemistry I", code: "BP202T", credits: 4, hours: 4, units: {1: "Classification, nomenclature and isomerism", 2: "Alkanes, Alkenes, Conjugated dienes", 3: "Alkyl halides, Alcohols", 4: "Carbonyl compounds", 5: "Carboxylic acids, Aliphatic amines"} },
                        { name: "Biochemistry", code: "BP203T", credits: 4, hours: 4, units: {1: "Biomolecules, Bioenergetics", 2: "Carbohydrate metabolism, Biological oxidation", 3: "Lipid metabolism, Amino acid metabolism", 4: "Nucleic acid metabolism and genetic information transfer", 5: "Enzymes"} },
                        { name: "Pathophysiology", code: "BP204T", credits: 4, hours: 4, units: {1: "Basic principles of Cell injury and Adaptation, Basic mechanism involved in the process of inflammation and repair", 2: "Cardiovascular System", 3: "Respiratory system, Renal system", 4: "Haematological Diseases, Endocrine system", 5: "Nervous system, Gastrointestinal system, Inflammatory bowel diseases, Jaundice, Hepatitis, Cancer"} },
                        { name: "Computer Applications in Pharmacy", code: "BP205T", credits: 4, hours: 4, units: {1: "Number system, Concept of Information Systems and Software", 2: "Web technologies", 3: "Application of computers in Pharmacy", 4: "Bioinformatics", 5: "Computers as data analysis in Preclinical development"} },
                        { name: "Environmental Sciences", code: "BP206T", credits: 4, hours: 4, units: {1: "The Multidisciplinary nature of environmental studies", 2: "Ecosystems", 3: "Environmental Pollution"} }
                    ],
                    3: [
                        { name: "Pharmaceutical Organic Chemistry II", code: "BP301T", credits: 4, hours: 4, units: {1: "Benzene and its derivatives", 2: "Phenol, Aromatic Amines, Aromatic Acids", 3: "Fats and Oils", 4: "Polynuclear hydrocarbons", 5: "Cyclo alkanes"} },
                        { name: "Physical Pharmaceutics I", code: "BP302T", credits: 4, hours: 4, units: {1: "Solubility of drugs", 2: "States of Matter and properties of matter, Physicochemical properties of drug molecules", 3: "Surface and interfacial phenomenon", 4: "Complexation and protein binding", 5: "pH, buffers and Isotonic solutions"} },
                        { name: "Pharmaceutical Microbiology", code: "BP303T", credits: 4, hours: 4, units: {1: "Introduction to microbiology", 2: "Identification of bacteria, Disinfectants and sterilants", 3: "Sterilization methods", 4: "Microbial spoilage, Preservation of pharmaceutical products", 5: "Animal cell culture"} },
                        { name: "Pharmaceutical Engineering", code: "BP304T", credits: 4, hours: 4, units: {1: "Flow of fluids, Size Reduction, Size Separation", 2: "Heat Transfer, Evaporation, Distillation", 3: "Drying, Mixing", 4: "Filtration, Centrifugation", 5: "Materials of pharmaceutical plant construction, Corrosion and its prevention"} }
                    ],
                    4: [
                        { name: "Pharmaceutical Organic Chemistry III", code: "BP401T", credits: 4, hours: 4, units: {1: "Stereo chemical aspects of organic chemistry", 2: "Heterocyclic chemistry I", 3: "Heterocyclic chemistry II", 4: "Reactions of synthetic importance", 5: "Asymmetric synthesis"} },
                        { name: "Medicinal Chemistry I", code: "BP402T", credits: 4, hours: 4, units: {1: "Introduction to Medicinal Chemistry", 2: "Drugs acting on Autonomic Nervous System", 3: "Cholinergic neurotransmitters", 4: "Drugs acting on Central Nervous System", 5: "Drugs acting on Central Nervous System"} },
                        { name: "Physical Pharmaceutics II", code: "BP403T", credits: 4, hours: 4, units: {1: "Colloidal dispersions", 2: "Rheology", 3: "Coarse dispersion", 4: "Micromeretics", 5: "Drug stability"} },
                        { name: "Pharmacology I", code: "BP404T", credits: 4, hours: 4, units: {1: "General Pharmacology", 2: "General Pharmacology", 3: "Pharmacology of drugs acting on peripheral nervous system", 4: "Pharmacology of drugs acting on central nervous system", 5: "Pharmacology of drugs acting on central nervous system"} },
                        { name: "Pharmacognosy and Phytochemistry I", code: "BP405T", credits: 4, hours: 4, units: {1: "Introduction to Pharmacognosy", 2: "Cultivation, Collection, Processing and storage of drugs of natural origin", 3: "Plant hormones and their applications, Polyploidy, mutation and hybridization", 4: "Pharmacognosy in various systems of medicine, Role of Pharmacognosy in allopathy and traditional systems of medicine", 5: "Introduction to secondary metabolites"} }
                    ],
                    5: [
                        { name: "Medicinal Chemistry II", code: "BP501T", credits: 4, hours: 4, units: {1: "Antihistaminic agents, H1–antagonists, H2-antagonists, Gastric Proton pump inhibitors, Anti-neoplastic agents", 2: "Anti-anginal, Diuretics", 3: "Anti-hypertensive Agents", 4: "Anti-arrhythmic Drugs, Anti-hyperlipidemic agents, Coagulant & Anticoagulants, Drugs used in Congestive Heart Failure", 5: "Drugs acting on Endocrine system"} },
                        { name: "Industrial Pharmacy I", code: "BP502T", credits: 4, hours: 4, units: {1: "Preformulation Studies", 2: "Tablets", 3: "Liquid orals, Capsules", 4: "Pellets, Parenteral Products", 5: "Cosmetics, Pharmaceutical Aerosols, Packaging Materials Science"} },
                        { name: "Pharmacology II", code: "BP503T", credits: 4, hours: 4, units: {1: "Pharmacology of drugs acting on cardio vascular system", 2: "Pharmacology of drugs acting on cardio vascular system, Pharmacology of drugs acting on urinary system", 3: "Autacoids and related drugs", 4: "Pharmacology of drugs acting on endocrine system", 5: "Pharmacology of drugs acting on endocrine system, Bioassay"} },
                        { name: "Pharmacognosy and Phytochemistry II", code: "BP504T", credits: 4, hours: 4, units: {1: "Metabolic pathways in higher plants and their determination", 2: "General introduction, composition, chemistry & chemical classes, biosources, therapeutic uses and commercial applications of Alkaloids, Phenylpropanoids and Flavonoids", 3: "Steroids, Cardiac Glycosides & Triterpenoids, Volatile oils, Tannins, Resins", 4: "Isolation, Identification and Analysis of Phytoconstituents", 5: "Industrial production, estimation and utilization of phytoconstituents"} },
                        { name: "Pharmaceutical Jurisprudence", code: "BP505T", credits: 4, hours: 4, units: {1: "Drugs and Cosmetics Act, 1940 and its rules 1945", 2: "Drugs and Cosmetics Act, 1940 and its rules 1945", 3: "Pharmacy Act –1948, Medicinal and Toilet Preparation Act –1955", 4: "Narcotic Drugs and Psychotropic substances Act-1985 and Rules, Study of Salient Features of Drugs and Magic Remedies Act and its rules", 5: "Pharmaceutical Legislations, Code of Pharmaceutical ethics, Medical Termination of Pregnancy Act, Right to Information Act, Introduction to Intellectual Property Rights (IPR)"} }
                    ],
                    6: [
                        { name: "Medicinal Chemistry III", code: "BP601T", credits: 4, hours: 4, units: {1: "Antibiotics", 2: "Antibiotics, Anti-tubercular Agents, Urinary tract anti-infective agents", 3: "Antiviral agents, Antifungal agents", 4: "Anti-protozoal Agents, Anthelmintics", 5: "Sulphonamides and Sulphones, Introduction to Drug Design, Combinatorial Chemistry"} },
                        { name: "Pharmacology III", code: "BP602T", credits: 4, hours: 4, units: {1: "Pharmacology of drugs acting on Respiratory system, Pharmacology of drugs acting on the Gastrointestinal Tract", 2: "Chemotherapy", 3: "Chemotherapy", 4: "Chemotherapy, Immunopharmacology", 5: "Principles of toxicology, Chronopharmacology"} },
                        { name: "Herbal Drug Technology", code: "BP603T", credits: 4, hours: 4, units: {1: "Herbs as raw materials, Biodynamic Agriculture, Indian Systems of Medicine", 2: "Nutraceuticals, Herb-drug and herb-food interactions", 3: "Herbal Cosmetics, Herbal excipients", 4: "Herbal formulations, Evaluation of Drugs WHO & ICH guidelines for the assessment of herbal drugs", 5: "Patent & Regulatory Requirements of natural products, General Introduction to Herbal Industry, Schedule T – Good Manufacturing Practice of Indian systems of medicine"} },
                        { name: "Biopharmaceutics and Pharmacokinetics", code: "BP604T", credits: 4, hours: 4, units: {1: "Introduction to Biopharmaceutics", 2: "Elimination", 3: "Pharmacokinetics: Basic concepts", 4: "Pharmacokinetics: Definition and concepts", 5: "Bioavailability and Bioequivalence"} },
                        { name: "Pharmaceutical Biotechnology", code: "BP605T", credits: 4, hours: 4, units: {1: "Brief introduction to Biotechnology with reference to Pharmaceutical Sciences", 2: "Genetic engineering", 3: "Study of cloning vectors, restriction endonucleases and DNA ligase", 4: "Immunoblotting, Protein purification, Immunoassays", 5: "Blood Products, Vaccine technology"} },
                        { name: "Quality Assurance", code: "BP606T", credits: 4, hours: 4, units: {1: "Quality Assurance and Quality Management concepts", 2: "ICH guidelines", 3: "Quality control and quality assurance tests", 4: "Good Laboratory Practices", 5: "Total Quality Management, Quality review and Quality documentation, Quality certifications, Quality by design (QbD)"} }
                    ],
                    7: [
                        { name: "Instrumental Methods of Analysis", code: "BP701T", credits: 4, hours: 4, units: {1: "UV Visible spectroscopy, Fluorimetry", 2: "IR spectroscopy, Flame Photometry, Atomic absorption spectroscopy, Nepheloturbidometry", 3: "Introduction to chromatography, Adsorption and partition column chromatography", 4: "Thin layer chromatography, Paper chromatography, Electrophoresis", 5: "Gas chromatography, High performance liquid chromatography (HPLC)"} },
                        { name: "Industrial Pharmacy II", code: "BP702T", credits: 4, hours: 4, units: {1: "Pilot plant scale up techniques", 2: "Technology development and transfer", 3: "Regulatory affairs, Regulatory requirements for drug approval", 4: "Quality management systems", 5: "Indian Regulatory Requirements"} },
                        { name: "Pharmacy Practice", code: "BP703T", credits: 4, hours: 4, units: {1: "Hospital and it’s organization, Hospital pharmacy and its organization", 2: "Adverse drug reaction, Community pharmacy", 3: "Drug distribution system in a hospital, Hospital formulary", 4: "Therapeutic drug monitoring, Medication adherence", 5: "Patient medication history interview, Community pharmacy management"} },
                        { name: "Novel Drug Delivery System", code: "BP704T", credits: 4, hours: 4, units: {1: "Controlled drug delivery systems", 2: "Polymers, Microencapsulation", 3: "Mucosal Drug Delivery system, Implantable Drug Delivery Systems", 4: "Transdermal Drug Delivery Systems, Gastroretentive drug delivery systems, Nasopulmonary drug delivery system", 5: "Targeted drug Delivery, Ocular Drug Delivery Systems, Intrauterine Drug Delivery Systems"} }
                    ],
                    8: [
                        { name: "Biostatistics and Research Methodology", code: "BP801T", credits: 4, hours: 4, units: {1: "Introduction, Measures of central tendency, Measures of dispersion, Correlation", 2: "Regression, Probability, Parametric test", 3: "Non Parametric tests, Introduction to Research", 4: "Graphs, Designing the methodology", 5: "Design of Experiments"} },
                        { name: "Social and Preventive Pharmacy", code: "BP802T", credits: 4, hours: 4, units: {1: "Concept of health and disease, Social and health education", 2: "Preventive medicine", 3: "National health programs", 4: "Health system in India", 5: "National health intervention programmes"} }
                    ]
                }
            },
            mpharm: {
                name: "Master of Pharmacy (M.Pharm)",
                specializations: {
                    pharmaceutics: {
                        name: "Pharmaceutics",
                        code: "MPH",
                        semesters: 4,
                        subjects: {
                            1: [
                                { name: "Modern Pharmaceutical Analytical Techniques", code: "MPH101T", credits: 4, hours: 4, units: {1: "UV-Visible spectroscopy, IR spectroscopy, Spectroflourimetry, Flame emission spectroscopy and Atomic absorption spectroscopy", 2: "NMR spectroscopy", 3: "Mass Spectroscopy", 4: "Chromatography", 5: "Electrophoresis, X ray Crystallography", 6: "Immunological assays"} },
                                { name: "Drug Delivery System", code: "MPH102T", credits: 4, hours: 4, units: {1: "Sustained Release(SR) and Controlled Release (CR) formulations, Rate Controlled Drug Delivery Systems", 2: "Gastro-Retentive Drug Delivery Systems, Ocular Drug Delivery Systems", 3: "Trans Dermal Drug Delivery Systems, Protein and Peptide Delivery", 4: "Vaccine delivery systems"} },
                                { name: "Modern Pharmaceutics", code: "MPH103T", credits: 4, hours: 4, units: {1: "Preformation Concepts, Optimization Techniques in Pharmaceutical Formulation", 2: "Validation, cGMP & Industrial Management", 3: "Compression and compaction, Study of compression parameters", 4: "Stability testing, protocols and ICH Guidelines"} },
                                { name: "Regulatory Affairs", code: "MPH104T", credits: 4, hours: 4, units: {1: "Documentation in pharmaceutical industry, Generic drug product development", 2: "CMC, post approval regulatory affairs, Regulatory requirements of EU, MHRA, TGA and ROW countries", 3: "Non clinical drug development", 4: "Clinical trials", 5: "Data management"} },
                                { name: "Pharmaceutics Practical I", code: "MPH105P", credits: 6, hours: 12, units: {} },
                                { name: "Seminar/Assignment", code: "MPH106S", credits: 4, hours: 7, units: {} }
                            ],
                            2: [
                                { name: "Molecular Pharmaceutics (Nano Tech and Targeted DDS)", code: "MPH201T", credits: 4, hours: 4, units: {1: "Targeted Drug Delivery Systems", 2: "Targeting Methods", 3: "The Gene Therapy", 4: "Delivery of Proteins and Peptides"} },
                                { name: "Advanced Biopharmaceutics & Pharmacokinetics", code: "MPH202T", credits: 4, hours: 4, units: {1: "Drug Absorption from the Gastrointestinal Tract", 2: "Biopharmaceutic Considerations in Drug Product Design", 3: "Pharmacokinetics", 4: "Drug Product Performance"} },
                                { name: "Computer Aided Drug Development", code: "MPH203T", credits: 4, hours: 4, units: {1: "Computers in Pharmaceutical Research and Development", 2: "Computational Modeling Of Drug Disposition", 3: "Computer-aided formulation development", 4: "Computer aided biopharmaceutical characterization"} },
                                { name: "Cosmetics and Cosmeceuticals", code: "MPH204T", credits: 4, hours: 4, units: {1: "Cosmetics - Regulatory", 2: "Cosmetic excipients", 3: "Antiperspirants & Deodorants", 4: "Structure of skin and hair", 5: "Herbal Cosmetics"} },
                                { name: "Pharmaceutics Practical II", code: "MPH205P", credits: 6, hours: 12, units: {} },
                                { name: "Seminar/Assignment", code: "MPH206S", credits: 4, hours: 7, units: {} }
                            ],
                            3: [
                                { name: "Research Methodology and Biostatistics", code: "MRM301T", credits: 4, hours: 4, units: {1: "General Research Methodology", 2: "Biostatistics", 3: "Medical Research", 4: "Declaration of Helsinki", 5: "CPCSEA guidelines for laboratory animal facility"} },
                                { name: "Journal Club", code: "MPH307J", credits: 1, hours: 1, units: {} },
                                { name: "Discussion / Presentation (Proposal Presentation)", code: "MPH308D", credits: 2, hours: 2, units: {} },
                                { name: "Research Work", code: "MPH309R", credits: 14, hours: 28, units: {} }
                            ],
                            4: [
                                { name: "Journal Club", code: "MPH410J", credits: 1, hours: 1, units: {} },
                                { name: "Research Work", code: "MPH411R", credits: 16, hours: 31, units: {} },
                                { name: "Discussion / Final Presentation (Colloquium)", code: "MPH412D", credits: 3, hours: 3, units: {} }
                            ]
                        }
                    },
                    pharmaceuticalChemistry: {
                        name: "Pharmaceutical Chemistry",
                        code: "MPC",
                        semesters: 4,
                        subjects: {
                            1: [
                                { name: "Modern Pharmaceutical Analytical Techniques", code: "MPC101T", credits: 4, hours: 4, units: {1: "UV-Visible spectroscopy, IR spectroscopy, Spectroflourimetry, Flame emission spectroscopy and Atomic absorption spectroscopy", 2: "NMR spectroscopy", 3: "Mass Spectroscopy", 4: "Chromatography", 5: "Electrophoresis, X ray Crystallography", 6: "Immunological assays"} },
                                { name: "Advanced Organic Chemistry-I", code: "MPC102T", credits: 4, hours: 4, units: {1: "Basic Aspects of Organic Chemistry", 2: "The chemistry of following pharmaceutical organic compounds", 3: "Specific reagent mediated reactions", 4: "Chemistry of Following Pharmaceutical organic compounds", 5: "Asymmetric synthesis"} },
                                { name: "Advanced Medicinal Chemistry", code: "MPC103T", credits: 4, hours: 4, units: {1: "Drug metabolism and Concept of Prodrugs", 2: "SAR of following classes of drugs", 3: "Antibiotics", 4: "Peptides and Protein structure", 5: "Various strategies in drug design"} },
                                { name: "Chemistry of Natural Products", code: "MPC104T", credits: 4, hours: 4, units: {1: "Natural products", 2: "Study of Natural products as leads for new pharmaceuticals", 3: "Alkaloids", 4: "Terpenoids", 5: "Recombinant DNA technology"} },
                                { name: "Pharmaceutical Chemistry Practical I", code: "MPC105P", credits: 6, hours: 12, units: {} },
                                { name: "Seminar/Assignment", code: "MPC106S", credits: 4, hours: 7, units: {} }
                            ],
                            2: [
                                { name: "Advanced Spectral Analysis", code: "MPC201T", credits: 4, hours: 4, units: {1: "UV and IR spectroscopy", 2: "1H-NMR spectroscopy", 3: "13C-NMR spectroscopy", 4: "2-D NMR", 5: "Mass Spectroscopy"} },
                                { name: "Advanced Organic Chemistry-II", code: "MPC202T", credits: 4, hours: 4, units: {1: "Synthetic Reagents & Applications", 2: "Synthetic Strategies", 3: "Heterocyclic Chemistry", 4: "Asymmetric Synthesis", 5: "Free radical reactions, Green chemistry"} },
                                { name: "Computer Aided Drug Design", code: "MPC203T", credits: 4, hours: 4, units: {1: "Introduction to Drug Discovery and Development", 2: "Molecular Modeling and Docking", 3: "Quantitative Structure Activity Relationship", 4: "Molecular Modeling and virtual screening techniques", 5: "Informatics & Methods in drug design"} },
                                { name: "Pharmaceutical Process Chemistry", code: "MPC204T", credits: 4, hours: 4, units: {1: "Process chemistry", 2: "Unit operations", 3: "Unit processes - I", 4: "Unit processes - II", 5: "Industrial Safety"} },
                                { name: "Pharmaceutical Chemistry Practical II", code: "MPC205P", credits: 6, hours: 12, units: {} },
                                { name: "Seminar/Assignment", code: "MPC206S", credits: 4, hours: 7, units: {} }
                            ],
                            3: [
                                { name: "Research Methodology and Biostatistics", code: "MRM301T", credits: 4, hours: 4, units: {1: "General Research Methodology", 2: "Biostatistics", 3: "Medical Research", 4: "Declaration of Helsinki", 5: "CPCSEA guidelines for laboratory animal facility"} },
                                { name: "Journal Club", code: "MPC307J", credits: 1, hours: 1, units: {} },
                                { name: "Discussion / Presentation (Proposal Presentation)", code: "MPC308D", credits: 2, hours: 2, units: {} },
                                { name: "Research Work", code: "MPC309R", credits: 14, hours: 28, units: {} }
                            ],
                            4: [
                                { name: "Journal Club", code: "MPC410J", credits: 1, hours: 1, units: {} },
                                { name: "Research Work", code: "MPC411R", credits: 16, hours: 31, units: {} },
                                { name: "Discussion / Final Presentation (Colloquium)", code: "MPC412D", credits: 3, hours: 3, units: {} }
                            ]
                        }
                    },
                    pharmacology: {
                        name: "Pharmacology",
                        code: "MPL",
                        semesters: 4,
                        subjects: {
                            1: [
                                { name: "Modern Pharmaceutical Analytical Techniques", code: "MPL101T", credits: 4, hours: 4, units: {1: "UV-Visible spectroscopy, IR spectroscopy, Spectroflourimetry, Flame emission spectroscopy and Atomic absorption spectroscopy", 2: "NMR spectroscopy", 3: "Mass Spectroscopy", 4: "Chromatography", 5: "Electrophoresis, X ray Crystallography", 6: "Immunological assays"} },
                                { name: "Advanced Pharmacology-I", code: "MPL102T", credits: 4, hours: 4, units: {1: "General Pharmacology", 2: "Neurotransmission", 3: "Pharmacology of peripheral nervous system", 4: "Pharmacology of cardiovascular system", 5: "Pharmacology of Endocrine system"} },
                                { name: "Pharmacological and Toxicological Screening Methods-I", code: "MPL103T", credits: 4, hours: 4, units: {1: "Laboratory animals", 2: "Preclinical screening models", 3: "Preclinical screening models", 4: "Preclinical screening models", 5: "Preclinical screening models"} },
                                { name: "Cellular and Molecular Pharmacology", code: "MPL104T", credits: 4, hours: 4, units: {1: "Cell biology, Cell signaling", 2: "Molecular Biology", 3: "r-DNA technology", 4: "The gene: its structure, function and control", 5: "Proteomics, Pharmacogenomics, Immunotherapeutics"} },
                                { name: "Pharmacology Practical I", code: "MPL105P", credits: 6, hours: 12, units: {} },
                                { name: "Seminar/Assignment", code: "MPL106S", credits: 4, hours: 7, units: {} }
                            ],
                            2: [
                                { name: "Advanced Pharmacology II", code: "MPL201T", credits: 4, hours: 4, units: {1: "Pharmacology of Endocrine System", 2: "Pharmacology of Chemotherapy", 3: "Pharmacology of Respiratory system", 4: "Pharmacology of Hormones and Hormone antagonists", 5: "Pharmacology of Autacoids"} },
                                { name: "Pharmacological and Toxicological Screening Methods-II", code: "MPL202T", credits: 4, hours: 4, units: {1: "Basic definition and types of toxicology", 2: "Acute, subacute and chronic toxicity studies", 3: "Reproductive toxicology studies, Genotoxicity studies", 4: "IND enabling studies", 5: "Safety pharmacology studies"} },
                                { name: "Principles of Drug Discovery", code: "MPL203T", credits: 4, hours: 4, units: {1: "An overview of modern drug discovery process", 2: "Target identification versus validation", 3: "Lead identification and optimization", 4: "Preclinical and clinical development considerations", 5: "Design and formulation of functional groups"} },
                                { name: "Clinical Research and Pharmacovigilance", code: "MPL204T", credits: 4, hours: 4, units: {1: "Regulatory Perspectives of Clinical Trials", 2: "Safety Monitoring in Clinical Trials", 3: "Basic terminology, establishment and operation of drug information center", 4: "Pharmacoepidemiology, pharmacoeconomics", 5: "Drug utilization evaluation, Medication adherence"} },
                                { name: "Pharmacology Practical II", code: "MPL205P", credits: 6, hours: 12, units: {} },
                                { name: "Seminar/Assignment", code: "MPL206S", credits: 4, hours: 7, units: {} }
                            ],
                            3: [
                                { name: "Research Methodology and Biostatistics", code: "MRM301T", credits: 4, hours: 4, units: {1: "General Research Methodology", 2: "Biostatistics", 3: "Medical Research", 4: "Declaration of Helsinki", 5: "CPCSEA guidelines for laboratory animal facility"} },
                                { name: "Journal Club", code: "MPL307J", credits: 1, hours: 1, units: {} },
                                { name: "Discussion / Presentation (Proposal Presentation)", code: "MPL308D", credits: 2, hours: 2, units: {} },
                                { name: "Research Work", code: "MPL309R", credits: 14, hours: 28, units: {} }
                            ],
                            4: [
                                { name: "Journal Club", code: "MPL410J", credits: 1, hours: 1, units: {} },
                                { name: "Research Work", code: "MPL411R", credits: 16, hours: 31, units: {} },
                                { name: "Discussion / Final Presentation (Colloquium)", code: "MPL412D", credits: 3, hours: 3, units: {} }
                            ]
                        }
                    },
                    pharmacognosy: {
                        name: "Pharmacognosy",
                        code: "MPG",
                        semesters: 4,
                        subjects: {
                            1: [
                                { name: "Modern Pharmaceutical Analytical Techniques", code: "MPG101T", credits: 4, hours: 4, units: {1: "UV-Visible spectroscopy, IR spectroscopy, Spectroflourimetry, Flame emission spectroscopy and Atomic absorption spectroscopy", 2: "NMR spectroscopy", 3: "Mass Spectroscopy", 4: "Chromatography", 5: "Electrophoresis, X ray Crystallography", 6: "Immunological assays"} },
                                { name: "Advanced Pharmacognosy-I", code: "MPG102T", credits: 4, hours: 4, units: {1: "Modern methods of extraction", 2: "Marine natural products", 3: "Natural sweeteners, Nutraceuticals", 4: "Immunomodulators", 5: "Plant biotechnology"} },
                                { name: "Phytochemistry", code: "MPG103T", credits: 4, hours: 4, units: {1: "Biosynthetic pathways", 2: "Drug discovery and development", 3: "Extraction and Isolation of phytopharmaceuticals", 4: "Standardization of herbal drugs", 5: "Herbal cosmetics"} },
                                { name: "Industrial Pharmacognostical Technology", code: "MPG104T", credits: 4, hours: 4, units: {1: "Herbal drug industry", 2: "Regulatory Requirements", 3: "Quality assurance and control", 4: "Good manufacturing practice", 5: "Monographs of herbal drugs"} },
                                { name: "Pharmacognosy Practical I", code: "MPG105P", credits: 6, hours: 12, units: {} },
                                { name: "Seminar/Assignment", code: "MPG106S", credits: 4, hours: 7, units: {} }
                            ],
                            2: [
                                { name: "Medicinal Plant Biotechnology", code: "MPG201T", credits: 4, hours: 4, units: {1: "Plant biotechnology", 2: "Different tissue culture techniques", 3: "Immobilization techniques", 4: "Secondary metabolite production culture systems", 5: "Biotransformation, Transgenic plants"} },
                                { name: "Advanced Pharmacognosy-II", code: "MPG202T", credits: 4, hours: 4, units: {1: "Herbal remedies - Toxicity and Regulations", 2: "Pharmacovigilance of herbal medicines", 3: "Plant allergens", 4: "DNA Fingerprinting techniques", 5: "Methods of Drug evaluation"} },
                                { name: "Indian System of Medicine", code: "MPG203T", credits: 4, hours: 4, units: {1: "Fundamental concepts of Ayurveda, Siddha, Unani and Homoeopathy systems of medicine", 2: "Naturopathy, Yoga and Aromatherapy practices", 3: "Formulation development of various systems of medicine", 4: "Schedule T", 5: "Shelf life studies of ASU formulations"} },
                                { name: "Herbal Cosmetics", code: "MPG204T", credits: 4, hours: 4, units: {1: "Herbal Cosmetics, Classification & Economic Aspects", 2: "Herbal ingredients used in skin care", 3: "Herbal ingredients used in Hair care", 4: "Herbal ingredients used in oral care", 5: "Formulation & Development of cosmeceuticals"} },
                                { name: "Pharmacognosy Practical II", code: "MPG205P", credits: 6, hours: 12, units: {} },
                                { name: "Seminar/Assignment", code: "MPG206S", credits: 4, hours: 7, units: {} }
                            ],
                            3: [
                                { name: "Research Methodology and Biostatistics", code: "MRM301T", credits: 4, hours: 4, units: {1: "General Research Methodology", 2: "Biostatistics", 3: "Medical Research", 4: "Declaration of Helsinki", 5: "CPCSEA guidelines for laboratory animal facility"} },
                                { name: "Journal Club", code: "MPG307J", credits: 1, hours: 1, units: {} },
                                { name: "Discussion / Presentation (Proposal Presentation)", code: "MPG308D", credits: 2, hours: 2, units: {} },
                                { name: "Research Work", code: "MPG309R", credits: 14, hours: 28, units: {} }
                            ],
                            4: [
                                { name: "Journal Club", code: "MPG410J", credits: 1, hours: 1, units: {} },
                                { name: "Research Work", code: "MPG411R", credits: 16, hours: 31, units: {} },
                                { name: "Discussion / Final Presentation (Colloquium)", code: "MPG412D", credits: 3, hours: 3, units: {} }
                            ]
                        }
                    }
                }
            },
            dpharm: {
                name: "Diploma in Pharmacy (D.Pharm)",
                semesters: 4,
                subjects: {
                    1: [
                        { name: "Pharmaceutics I", code: "DP101T", credits: 4, hours: 4, units: {1: "Introduction to different dosage forms", 2: "Introduction to pharmacopoeias", 3: "Metrology", 4: "Packaging of pharmaceuticals", 5: "Size reduction", 6: "Mixing and Homogenization", 7: "Clarification and Filtration", 8: "Extraction and Galenicals", 9: "Heat processes Evaporation", 10: "Distillation", 11: "Introduction to drying processes", 12: "Sterilization", 13: "Processing of Tablets", 14: "Processing of Capsules", 15: "Study of immunological products"} },
                        { name: "Pharmaceutical Chemistry I", code: "DP102T", credits: 4, hours: 4, units: {1: "General discussion on the following inorganic compounds", 2: "Acids, bases and buffers", 3: "Antioxidants", 4: "Gastrointestinal agents", 5: "Topical Agents", 6: "Dental Products", 7: "Inhalants", 8: "Expectorants & Emetics", 9: "Antidotes", 10: "Major Intra and Extracellular Electrolytes", 11: "Inorganic Official compounds of Iron, Iodine, and Calcium Ferrous Sulfate", 12: "Radio pharmaceuticals and Contrast media", 13: "Quality control of Drugs and Pharmaceuticals", 14: "Identification tests for cations and anions as per Indian Pharmacopoeia"} },
                        { name: "Pharmacognosy", code: "DP103T", credits: 4, hours: 4, units: {1: "Definition, history and scope of Pharmacognosy", 2: "Classification of drugs", 3: "Quality control of crude drugs", 4: "Occurrence, distribution, organoleptic evaluation, chemical constituents including tests wherever applicable and therapeutic efficacy of following categories of drugs"} },
                        { name: "Biochemistry", code: "DP104T", credits: 4, hours: 4, units: {1: "Carbohydrates", 2: "Proteins and amino acids", 3: "Lipids", 4: "Nucleic acids", 5: "Enzymes", 6: "Vitamins", 7: "Metabolism"} },
                        { name: "Human Anatomy", code: "DP105T", credits: 4, hours: 4, units: {1: "Scope of Anatomy and Physiology", 2: "Structure of cell its components and their functions", 3: "Elementary tissues of the human body", 4: "Haemopoetic System", 5: "Lymphatic System", 6: "Cardiovascular System", 7: "Respiratory System", 8: "Digestive System", 9: "Skeletal System", 10: "Central Nervous system", 11: "Urinary System", 12: "Muscular System", 13: "Sensory Organs", 14: "Reproductive System"} }
                    ],
                    2: [
                        { name: "Pharmaceutics II", code: "DP201T", credits: 4, hours: 4, units: {1: "Dispensing Pharmacy", 2: "Dispensed Medications", 3: "Semi-solid Dosage Forms", 4: "Sterile Dosage Forms"} },
                        { name: "Pharmaceutical Chemistry II", code: "DP202T", credits: 4, hours: 4, units: {1: "Introduction to the nomenclature of organic chemical systems", 2: "The chemistry of following pharmaceutical organic compounds"} },
                        { name: "Pharmacology", code: "DP203T", credits: 4, hours: 4, units: {1: "General Pharmacology", 2: "Pharmacology of central nervous System", 3: "Pharmacology of cardiovascular system", 4: "Pharmacology of respiratory system", 5: "Pharmacology of Endocrine system", 6: "Pharmacology of chemotherapy", 7: "Pharmacology of urinary system", 8: "Basic Concepts of Pharmacotherapy"} },
                        { name: "Pharmaceutical Microbiology", code: "DP204T", credits: 4, hours: 4, units: {1: "Introduction to the scope of microbiology", 2: "Structure of bacterial cell", 3: "Classification of microbes and their taxonomy", 4: "Identification of Microbes", 5: "Control of microbes by physical and chemical methods", 6: "Sterilization", 7: "Immunology", 8: "Genetic Recombination", 9: "Introduction to pharmaceutical microbiology"} },
                        { name: "Health Education", code: "DP205T", credits: 4, hours: 4, units: {1: "Concept of health", 2: "Nutrition and health", 3: "First aid", 4: "Environment and health", 5: "Fundamental principles of microbiology", 6: "Communicable diseases", 7: "Non-communicable diseases", 8: "Epidemiology"} }
                    ],
                    3: [
                        { name: "Pharmaceutical Jurisprudence", code: "DP301T", credits: 4, hours: 4, units: {1: "Scope and objectives of the course", 2: "Broad content of the following acts and rules", 3: "Detailed study of Schedule G, H, M, N, P, T, V, X, Y", 4: "Pharmaceutical Ethics"} },
                        { name: "Drug Store Management", code: "DP302T", credits: 4, hours: 4, units: {1: "Introduction to drug store management", 2: "Organization of drug store", 3: "Sales Promotion", 4: "Accounting and Finance", 5: "Budgeting & Finance", 6: "Personnel Management"} },
                        { name: "Clinical Pharmacy", code: "DP303T", credits: 4, hours: 4, units: {1: "Introduction to Clinical Pharmacy Practice", 2: "Clinical Pharmacy Practice", 3: "Patient Data Analysis", 4: "Lab Data Interpretation", 5: "Diseases: Common signs and symptoms", 6: "Clinical use of Medicines in the treatment of diseases", 7: "Physiological parameters and its significance"} },
                        { name: "Hospital Pharmacy", code: "DP304T", credits: 4, hours: 4, units: {1: "Introduction to hospital pharmacy", 2: "Hospital Formulary", 3: "Drug Distribution in the Hospital", 4: "Manufacturing", 5: "Drug Information Service", 6: "Introduction to investigational use of drugs", 7: "Nuclear Pharmacy"} }
                    ],
                    4: [
                        { name: "Community Pharmacy", code: "DP401T", credits: 4, hours: 4, units: {1: "Introduction to Community Pharmacy", 2: "Community Pharmacy Management", 3: "Prescriptions", 4: "Communication skills and special requirements", 5: "Introduction to responding to symptoms vocabulary", 6: "Code of ethics for community pharmacists"} },
                        { name: "Pharmacy Practice", code: "DP402T", credits: 4, hours: 4, units: {1: "Hospital - its Organization and functions", 2: "Hospital pharmacy-Organization and management", 3: "The Budget – Preparation and implementation", 4: "Hospital drug policy", 5: "Hospital formulary", 6: "Purchase and Inventory Control", 7: "Pharmacy and Therapeutic committee (PTC)", 8: "Central sterile supply services", 9: "Nuclear Pharmacy"} },
                        { name: "Internship", code: "DP403P", credits: 8, hours: 16, units: {} },
                        { name: "Project Work", code: "DP404P", credits: 4, hours: 8, units: {} }
                    ]
                }
            }
        };

        // Theme Management
        // Theme Management with Emoji Rotation
        const emojiList = ["🌗", "🧊", "🦄", "🎨", "⚡️", "😎", "🍭", "✨", "💫", "🌗", "🧊", "🦄", "🎨", "⚡️", "😎", "🍭", "✨", "💫",
        "🌍", "☃️", "💦", "✍️", "🌸", "🌺", "🌹", "🌼", "🌻", 
        "🏵️", "🍁", "☘️", "❄️", "🫧", "🌊", "☁️", "🌤️", "⛅",
        "🌥️", "🌦️", "⛈️", "🌩️", "🌑", "🌒", "🌓", "🌘", "🙊",
        "🐱", "🐶", "🐼", "🐭", "🦄", "🐦", "🦜", "🐣", "🐔",
        "🐥", "🐤", "🐬", "🦚", "🐾", "🧊", "✈️", "🎀", "🕯️",
        "💰", "🪙", "💡", "💉", "🧫", "🧪", "🩺", "🔔", "🧿",
        "♥️", "🖤", "🩷", "🤍", "🚩", "🇮🇳", "🇺🇸", "🇬🇧", "🧬",
        "🎓", "🧼", "🗺️", "🛫", "🎠", "🎡", "🛳️", "🛺", "🚲",
        "🚜", "🛵", "🍫", "🧈", "☕", "🥛", "🫗", "🍵", "🍬",
        "🍰", "🍥", "🥮", "🍚", "🦪", "🥭", "🍎", "🍊", "🥝",
        "🍇", "🍔", "🤫", "☺️"];
        let emojiIndex = 0;
        
        function toggleTheme() {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        const themeToggle = document.querySelector('.theme-toggle');
        const icon = themeToggle.querySelector('i');
        
        // Rotate emoji
        emojiIndex = (emojiIndex + 1) % emojiList.length;
        
        if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        icon.className = '';
        } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.className = '';
        }
        
        // Update button text with emoji (keeping the icon)
        themeToggle.innerHTML = `<i class="${icon.className}"></i> ${emojiList[emojiIndex]}`;
        }
        // Check for saved theme preference or respect OS preference
        function initTheme() {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                document.body.setAttribute('data-theme', 'dark');
                const themeToggle = document.querySelector('.theme-toggle');
                const icon = themeToggle.querySelector('i');
                icon.className = 'fas fa-sun';
            }
        }
        
        // Navigation functions
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');
            currentPage = pageId;
        }
        
        function goBack() {
            if (pageHistory.length > 0) {
                const previousPage = pageHistory.pop();
                showPage(previousPage);
            } else {
                showPage('home-page');
            }
        }
        
        function goToHome() {
            pageHistory.length = 0;
            showPage('home-page');
        }
        
        function showSpecializations(course) {
            pageHistory.push('home-page');
            currentCourse = course;
            
            // Update specialization heading
            document.getElementById('specialization-heading').innerHTML = 
                `<i class="fas fa-star"></i> ${courses[course].name} - Select Specialization`;
            
            // Generate specialization cards
            const specializationContainer = document.getElementById('specialization-container');
            specializationContainer.innerHTML = '';
            
            for (const [key, specialization] of Object.entries(courses[course].specializations)) {
                const specializationCard = document.createElement('div');
                specializationCard.className = 'specialization-card';
                specializationCard.onclick = () => showSemesters(course, key);
                specializationCard.tabIndex = 0;
                specializationCard.setAttribute('role', 'button');
                
                specializationCard.innerHTML = `
                    <div class="specialization-icon">🧪</div>
                    <h3 class="specialization-name">${specialization.name}</h3>
                    <p class="specialization-desc">Advanced study of ${specialization.name.toLowerCase()} with focus on research and development.</p>
                    <div class="specialization-code">Code: ${specialization.code}</div>
                `;
                
                specializationContainer.appendChild(specializationCard);
            }
            
            showPage('specializations-page');
        }
        
        function showSemesters(course, specialization = '') {
            if (specialization) {
                pageHistory.push('specializations-page');
                currentSpecialization = specialization;
            } else {
                pageHistory.push('home-page');
            }
            
            // Update semester heading
            let headingText = courses[course].name;
            if (specialization) {
                headingText += ` - ${courses[course].specializations[specialization].name}`;
            }
            
            document.getElementById('semester-heading').innerHTML = 
                `<i class="fas fa-calendar-alt"></i> ${headingText} - Select Semester`;
            
            // Generate semester cards
            const semesterContainer = document.getElementById('semester-container');
            semesterContainer.innerHTML = '';
            
            const numSemesters = specialization ? 
                courses[course].specializations[specialization].semesters : 
                courses[course].semesters;
                
            for (let i = 1; i <= numSemesters; i++) {
                const semesterCard = document.createElement('div');
                semesterCard.className = 'semester-card';
                semesterCard.onclick = () => showSubjects(course, i, specialization);
                semesterCard.tabIndex = 0;
                semesterCard.setAttribute('role', 'button');
                
                semesterCard.innerHTML = `
                    <div class="semester-icon">${i}</div>
                    <h3 class="semester-name">Semester ${i}</h3>
                `;
                
                semesterContainer.appendChild(semesterCard);
            }
            
            showPage('semesters-page');
        }
        
        function showSubjects(course, semester, specialization = '') {
            if (specialization) {
                pageHistory.push('semesters-page');
            } else {
                pageHistory.push('semesters-page');
            }
            
            // Update subject heading
            let headingText = courses[course].name;
            if (specialization) {
                headingText += ` - ${courses[course].specializations[specialization].name}`;
            }
            
            document.getElementById('subject-heading').innerHTML = 
                `<i class="fas fa-book"></i> ${headingText} - Semester ${semester} Subjects`;
            
            // Generate subject cards
            const subjectContainer = document.getElementById('subject-container');
            subjectContainer.innerHTML = '';
            
            const subjects = specialization ? 
                courses[course].specializations[specialization].subjects[semester] : 
                courses[course].subjects[semester];
                
            subjects.forEach((subject, index) => {
                const subjectCard = document.createElement('div');
                subjectCard.className = 'subject-card';
                subjectCard.onclick = () => showUnits(course, semester, index, specialization);
                subjectCard.tabIndex = 0;
                subjectCard.setAttribute('role', 'button');
                
                subjectCard.innerHTML = `
                    <div class="subject-icon"><i class="fas fa-book-open"></i></div>
                    <h3 class="subject-name">${subject.name}</h3>
                    <p class="subject-details">${subject.code}</p>
                    <div class="subject-meta">
                        <span>${subject.credits} Credits</span>
                        <span>${subject.hours} Hrs/Wk</span>
                    </div>
                `;
                
                subjectContainer.appendChild(subjectCard);
            });
            
            showPage('subjects-page');
        }

function showUnits(course, semester, subjectIndex, specialization = '') {
    pageHistory.push('subjects-page');
    
    const subjects = specialization ? 
        courses[course].specializations[specialization].subjects[semester] : 
        courses[course].subjects[semester];
    
    const subject = subjects[subjectIndex];
    
    // Update unit heading
    let headingText = courses[course].name;
    if (specialization) {
        headingText += ` - ${courses[course].specializations[specialization].name}`;
    }
    headingText += ` - Semester ${semester} - ${subject.name} Units`;
    
    document.getElementById('unit-heading').innerHTML = 
        `<i class="fas fa-book-open"></i> ${headingText}`;
    
    // Generate unit cards
    const unitContainer = document.getElementById('unit-container');
    unitContainer.innerHTML = '';
    
    const units = subject.units || {};
    
    for (const [key, desc] of Object.entries(units)) {
        const unitCard = document.createElement('div');
        unitCard.className = 'unit-card';
        unitCard.tabIndex = 0;
        unitCard.setAttribute('role', 'button');
        
        // Navigate to notes page instead of opening new tab
        unitCard.onclick = () => showNotes(course, semester, subjectIndex, key, specialization);
        
        unitCard.innerHTML = `
            <h3 class="unit-number">Unit ${key}</h3>
            <p class="unit-desc">${desc}</p>
        `;
        
        unitContainer.appendChild(unitCard);
    }
    
    if (Object.keys(units).length === 0) {
        unitContainer.innerHTML = '<p>No units available for this subject yet.</p>';
    }
    
    showPage('units-page');
}

function showNotes(course, semester, subjectIndex, unit, specialization = '') {
    pageHistory.push('units-page');
    
    const subjects = specialization ? 
        courses[course].specializations[specialization].subjects[semester] : 
        courses[course].subjects[semester];
    
    const subject = subjects[subjectIndex];
    const folderName = `${subject.code}-U${unit}`;
    
    // Update notes heading
    let headingText = courses[course].name;
    if (specialization) {
        headingText += ` - ${courses[course].specializations[specialization].name}`;
    }
    headingText += ` - Semester ${semester} - ${subject.name} - Unit ${unit}`;
    
    document.getElementById('notes-heading').innerHTML = 
        `<i class="fas fa-file-pdf"></i> ${headingText} - Select Note Type`;
    
    // Generate note cards
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = '';
    
    const noteTypes = [
        { name: 'Reference Books', file: 'reference.pdf', icon: 'fas fa-book', desc: 'Comprehensive reference materials' },
        { name: 'Imperfect Pharmacy', file: 'imperfect.pdf', icon: 'fas fa-file-alt', desc: 'Notes from Imperfect Pharmacy' },
        { name: 'Carewall Pharma', file: 'carewall.pdf', icon: 'fas fa-prescription' , desc: 'Carewall Pharma study guides' }
    ];

    noteTypes.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.className = 'note-card';
        noteCard.tabIndex = 0;
        noteCard.setAttribute('role', 'button');
        noteCard.onclick = () => showPDF(folderName, note.file, note.name);
        
        noteCard.innerHTML = `
            <div class="note-icon"><i class="${note.icon}"></i></div>
            <h3 class="note-name">${note.name}</h3>
            <p class="note-desc">${note.desc}</p>
        `;
        
        notesContainer.appendChild(noteCard);
    });
    
    showPage('notes-page');
}

function showPDF(folderName, fileName, noteName) {
    pageHistory.push('notes-page');
    currentFolder = folderName;
    currentFile = fileName;
    currentNoteName = noteName;
    
    document.getElementById('pdf-heading').innerHTML = 
        `<i class="fas fa-file-pdf"></i> Viewing ${noteName}`;
    
    const pdfContainer = document.getElementById('pdf-canvas-container');
    pdfContainer.innerHTML = '';  // Clear old content
    
    // Loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'pdf-loading';
    loadingDiv.style.textAlign = 'center';
    loadingDiv.style.padding = '20px';
    loadingDiv.innerHTML = '<p>Loading PDF... Please wait.</p>';
    pdfContainer.appendChild(loadingDiv);
    
    // Error handling div
    const errorDiv = document.createElement('div');
    errorDiv.id = 'pdf-error';
    errorDiv.style.display = 'none';
    errorDiv.style.textAlign = 'center';
    errorDiv.style.padding = '20px';
    errorDiv.style.color = 'red';
    errorDiv.innerHTML = '<p>Error loading PDF. Please check your internet or try again later. <br><a href="${pdfUrl}" target="_blank">Open directly</a></p>';
    pdfContainer.appendChild(errorDiv);
    
    // PDF URL (use your Netlify base after upload)
    const pdfUrl = `https://your-site.netlify.app/notes/${folderName}/${fileName}`;  // Replace with actual Netlify URL
    
    // Optimized Google Viewer URL (embedded=true for full view, rm=minimal for clean UI)
    const googleViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true&rm=minimal`;
    
    const iframe = document.createElement('iframe');
    iframe.src = googleViewerUrl;
    iframe.style.width = '100%';
    iframe.style.height = '100vh';  // Full height for clarity
    iframe.style.border = 'none';
    iframe.loading = 'lazy';
    iframe.sandbox = 'allow-scripts allow-same-origin';  // Security + compatibility
    
    iframe.onload = () => {
        document.getElementById('pdf-loading').style.display = 'none';
    };
    
    iframe.onerror = () => {
        document.getElementById('pdf-loading').style.display = 'none';
        document.getElementById('pdf-error').style.display = 'block';
    };
    
    // Timeout for error (10s)
    setTimeout(() => {
        if (iframe.contentDocument === null || iframe.contentDocument.body.innerHTML === '') {
            document.getElementById('pdf-loading').style.display = 'none';
            document.getElementById('pdf-error').style.display = 'block';
        }
    }, 10000);
    
    pdfContainer.appendChild(iframe);
    
    showPage('pdf-viewer-page');
}
function openTool(tool) {
    if (['drug-interactions', 'formula-calculator', 'community-forum', 'study-material', 'practical-exam', 'video-lectures'].includes(tool)) {
        showPaidModal();
    } else {
        showUnderDevelopment();
    }
}
        function showPaidModal() {
            const modal = document.getElementById('paid-modal');
            modal.style.display = 'flex';
        }
        // Modal functions
        function showUnderDevelopment() {
            const modal = document.getElementById('under-development-modal');
            modal.style.display = 'flex';
        }
        
        function showLegalModal() {
            const modal = document.getElementById('legal-modal');
            modal.style.display = 'flex';
        }
        
    function showContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.style.display = 'flex';
}
        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.style.display = 'none';
        }
        
        // Accordion functionality
        function toggleAccordion(element) {
            // Toggle active class on header
            element.classList.toggle('active');
            
            // Get the content element
            const content = element.nextElementSibling;
            
            // Close all other accordion items
            const allHeaders = document.querySelectorAll('.accordion-header');
            const allContents = document.querySelectorAll('.accordion-content');
            
            allHeaders.forEach(header => {
                if (header !== element) {
                    header.classList.remove('active');
                }
            });
            
            allContents.forEach(item => {
                if (item !== content) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle current content
            content.classList.toggle('active');
        }
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
            }
        };
        function showHelpCenterModal() {
    const modal = document.getElementById('help-center-modal');
    modal.style.display = 'flex';
}

    
function showFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    modal.style.display = 'flex';
}

// Share Functionality
const siteUrl = window.location.href; // Current page URL for sharing
const shareMessage = ' *Discover* 𝗣𝗵𝗮𝗿𝗺𝗮𝗦𝘁𝘂𝗱𝘆 𝗛𝘂𝗯 ✨Your trusted companion for pharmacy excellence—brought to you by *DBC Pvt Ltd Narwana* in collaboration with *VIDHI_PROJECTS Chandigarh*.📚 Unlock free notes, smart study tools, and expert insights designed to help pharmacy students succeed with confidence.🌟 𝗝𝗼𝗶𝗻 𝗮 𝗴𝗿𝗼𝘄𝗶𝗻𝗴 𝗰𝗼𝗺𝗺𝘂𝗻𝗶𝘁𝘆 𝗼𝗳 𝗲𝗺𝗽𝗼𝘄𝗲𝗿𝗲𝗱 𝗹𝗲𝗮𝗿𝗻𝗲𝗿𝘀 𝗮𝗻𝗱 𝗳𝘂𝘁𝘂𝗿𝗲 𝗽𝗵𝗮𝗿𝗺𝗮𝗰𝗶𝘀𝘁𝘀.🤝 Share this resource with a friend and build your journey together. 📩 Contact Us DBC Pvt Ltd Narwana: ask.sanjey@gmail.com Vidhi Projects Chandigarh: ask.vidhi.sharma@gmail.com 💊 PharmaStudy Hub—Where knowledge meets success. #PharmaStudy Hub #DBC Pvt Ltd Narwana';

function toggleShareMenu() {
    const modal = document.getElementById('share-modal');
    modal.classList.toggle('active');
}

function closeShareMenu() {
    document.getElementById('share-modal').classList.remove('active');
}

function shareWhatsApp(event) {
    event.preventDefault();
    const encodedMessage = encodeURIComponent(shareMessage + '\n\n' + siteUrl);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    closeShareMenu();
}

function shareTelegram(event) {
    event.preventDefault();
    const encodedMessage = encodeURIComponent(shareMessage + '\n\n' + siteUrl);
    window.open(`https://t.me/share/url?url=${encodeURIComponent(siteUrl)}&text=${encodedMessage}`, '_blank');
    closeShareMenu();
}

function shareFacebook(event) {
    event.preventDefault();
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`, '_blank');
    closeShareMenu();
}

function shareTwitter(event) {
    event.preventDefault();
    const encodedMessage = encodeURIComponent(shareMessage);
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(siteUrl)}&text=${encodedMessage}`, '_blank');
    closeShareMenu();
}

function shareNative() {
    if (navigator.share) {
        navigator.share({
            title: 'DBC Pvt Ltd Narwana',
            text: shareMessage,
            url: siteUrl
        }).then(() => {
            closeShareMenu();
        }).catch(() => {
            // Fallback to a general share prompt if needed
            alert('Sharing options available via your device—copy the link: Team DBC Pvt Ltd Narwana. ' + siteUrl);
        });
    } else {
        // Fallback for non-supporting browsers: Copy to clipboard
        navigator.clipboard.writeText(shareMessage + '\n\n' + siteUrl).then(() => {
            alert('Link copied! Paste it anywhere to share: Team DBC.');
            closeShareMenu();
        });
    }
}

// Close share menu on outside click
window.onclick = function(event) {
    const modal = document.getElementById('share-modal');
    if (event.target === modal) {
        closeShareMenu();
    }
    // Preserve existing modal close logic for other modals
};


        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            initTheme();
            
            // Prevent text selection
            document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });
            
            document.addEventListener('selectstart', function(e) {
                e.preventDefault();
            });
        });