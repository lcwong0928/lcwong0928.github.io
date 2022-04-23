/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "PNC-27, a Chimeric p53-Penetratin Peptide Binds to HDM-2 in a p53 Peptide-like Structure, Induces Selective Membrane-Pore Formation and Leads to Cancer Cell Lysis",
    authors:
      "Sarafraz-Yazdi, Ehsan, Stephen Mumin, Diana Cheung, Daniel Fridman, Brian Lin, Lawrence Wong, Ramon Rosal, Rebecca Rudolph, Matthew Frenkel, Anusha Thadi, William F. Morano, Wilbur B. Bowne, Matthew R. Pincus, and Josef Michl",
    conferences:
      "Biomedicines 2022, 10(5), 945",
    researchYr: 2022,
    image: "assets/images/research-page/pnc27.png",
    abstract:
      "PNC-27, a 32-residue peptide that contains an HDM-2 binding domain and a cell-penetrating peptide (CPP) leader sequence kills cancer, but not normal, cells by binding to HDM-2 associated with the plasma membrane and induces the formation of pores causing tumor cell lysis and necrosis. Conformational energy calculations on the structure of PNC-27 bound to HDM-2 suggest that 1:1 complexes form between PNC-27 and HDM-2 with the leader sequence pointing away from the complex. Immuno-scanning electron microscopy was carried out with cancer cells treated with PNC-27 and decorated with an anti-PNC-27 antibody coupled to 6 nm gold particles and an anti-HDM-2 antibody linked to 15 nm gold particles. We found multiple 6 nm- and 15 nm-labeled gold particles in approximately 1:1 ratios in layered ring-shaped structures in the pores near the cell surface suggesting that these complexes are important to the pore structure. No pores formed in the control, PNC-27-treated untransformed fibroblasts. Based on the theoretical and immuno-EM studies, we propose that the pores are lined by PNC-27 bound to HDM-2 at the membrane surface with the PNC-27 leader sequence lining the pores or by PNC-27 bound to HDM-2.",
    absbox: "absPopup1",
    pdf: "https://www.mdpi.com/2227-9059/10/5/945",
    pdfbox: "pdfPopup1",
    link: "https://www.mdpi.com/2227-9059/10/5/945",
    linkbox: "linkPopup1",
  },

  {
    title: "EHReader: A Medical Healthcare Question Answering System",
    authors:
      "Jerry Li, Lawrence Wong, Yang Xiang, Estelle Yao",
    conferences:
      "6.864 Advanced Natural Language Processing",
    researchYr: 2021,
    image: "assets/images/research-page/6_864.png",
    abstract:
      "Question answering (QA) is a prominent challenge in natural language processing research that requires machines to predict the correct answer to a posed question by extracting it from a given context. In some cases, QA tasks also involve determining \"answerability\": whether the answer is present at all in the passage. Recent research has begun to explore domain-specific QA systems, such as for usage in medical contexts. The growing adoption of electronic health records (EHR) in the healthcare system poses a specific QA challenge: retrieving answers from clinical notes to inform medical decisions. This paper introduces the EHReader model based on the Retrospective Reader architecture. The EHReader model incorporates quick reading and deep reading modules, enabling it to evaluate answerability and then verify the answer more comprehensively quickly. We compare EHReader to baseline DistilBERT and BioBERT models for medical QA tasks. The proposed model incorporating only the QuickReader module achieves state-of-the-art results on the benchmark EmrQA medical dataset and outperforms the baseline DistilBERT and BioBERT models.",
    absbox: "absPopup2",
    pdf: "assets/docs/6_864.pdf",
    pdfbox: "pdfPopup2",
    link: "https://github.com/YangXiang-Sunny/MIT6.864_AdvNLP_Project",
    linkbox: "linkPopup2",
  },

   {
    title: "Deep Learning for COVID-19 Diagnoses using Chest Imaging",
    authors:
      "William Phu, Lawrence Wong",
    conferences:
      "6.874 Computational Systems Biology",
    researchYr: 2020,
    image: "assets/images/research-page/6_874.png",
    abstract:
      "Coronavirus disease 2019 (COVID-19) first emerged in the city of Wuhan in Hubei province and has become a global pandemic affecting millions around the globe. Due to the limited availability in traditional antibody testing, rapid and accurate diagnosis of respiratory diseases became more urgent in the midst of the pandemic. In this paper, we propose a machine learning tool based on chest radiographs (X-rays) that can aid radiologists or healthcare professionals in the diagnosis of COVID-19. X-rays is an imaging technique used to aid the diagnosis of many respiratory diseases, including tuberculosis (TB) and pneumonia. This image classification task is best accomplished by leveraging effective convolutional neural network (CNN) architectures. We aim to validate several methods, including logistic regression, K-nearest neighbors, and various CNN architectures, in the classification of posterior-anterior X-ray images of patients with different respiratory diseases. The experimental results show promising results in differentiating chest X-rays of COVID-19 from normal cases. Specifically, the ResNet architecture achieved a weighted accuracy of 99.0\% (with a sensitivity of 97.0\%, a specificity of 100.0\%, and a precision of 100.0\%) on the binary dataset. However, the performance dropped significantly as other respiratory images are mixed in to create the multiclass dataset. Saliency maps, filters, and activation visualization are used to interpret these techniques. While X-rays should not be used as first-line tests to diagnose COVID-19, we believe our findings can aid in decisions made by medical professionals.",
    absbox: "absPopup3",
    pdf: "assets/docs/6_874.pdf",
    pdfbox: "pdfPopup3",
    link: "https://github.com/lcwong0928/covid-diagnosis",
    linkbox: "linkPopup3",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      linkbox,
      link,
      absbox,
      abstract,
      pdfbox,
      pdf,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>

                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${pdfbox}" aria-expanded="false" aria-controls="${pdfbox}" href="${pdf}">
                            LINKS
                        </button>

                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${pdfbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                        <p><a href="${pdf}">Full text</a></p>
                        <p><a href="${link}">More details</a></p>
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
