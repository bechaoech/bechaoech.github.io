/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Any3DIS: Class-Agnostic 3D Instance Segmentation by 2D Mask Tracking",
    authors: "<strong class='highlight-name'>Phuc Nguyen</strong>, Minh Luu, Anh Tran, Cuong Pham, Khoi Nguyen",
    link: "https://any3dis.github.io/",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2025,
    citebox: "popup1",
    image: "assets/images/any3dis.png",
    citation: {
      vancouver:
        "Existing 3D instance segmentation methods frequently encounter issues with over-segmentation, leading to redundant and inaccurate 3D proposals that complicate downstream tasks. This challenge arises from their unsupervised merging approach, where dense 2D instance masks are lifted across frames into point clouds to form 3D candidate proposals without direct supervision. These candidates are then hierarchically merged based on heuristic criteria, often resulting in numerous redundant segments that fail to combine into precise 3D proposals. To overcome these limitations, we propose a 3D-Aware 2D Mask Tracking module that uses robust 3D priors from a 2D mask segmentation and tracking foundation model (SAM-2) to ensure consistent object masks across video frames. Rather than merging all visible superpoints across views to create a 3D mask, our 3D Mask Optimization module leverages a dynamic programming algorithm to select an optimal set of views, refining the superpoints to produce a final 3D proposal for each object. Our approach achieves comprehensive object coverage within the scene while reducing unnecessary proposals, which could otherwise impair downstream applications. Evaluations on ScanNet200 and ScanNet++ confirm the effectiveness of our method, with improvements across Class-Agnostic, Open-Vocabulary, and Open-Ended 3D Instance Segmentation tasks.",
    },
    abstract:
      "A novel class-agnostic approach for 3D instance segmentation that leverages 2D mask tracking to segment 3D objects in point cloud scenes.",
    absbox: "absPopup1",
  },

  {
    title: "Open-Ended 3D Point Cloud Instance Segmentation",
    authors: "<strong class='highlight-name'>Phuc Nguyen*</strong>, Minh Luu*, Anh Tran, Cuong Pham, Khoi Nguyen",
      link: "https://arxiv.org/abs/2408.11747",
    conferences:
      "Arxiv Preprint",
    researchYr: 2024,
    citebox: "popup2",
    image: "assets/images/openened.png",
    citation: {
      vancouver:
        "Open-Vocab 3D Instance Segmentation methods (OV-3DIS) have recently demonstrated their ability to generalize to unseen objects. However, these methods still depend on predefined class names during testing, restricting the autonomy of agents. To mitigate this constraint, we propose a novel problem termed Open-Ended 3D Instance Segmentation (OE-3DIS), which eliminates the necessity for predefined class names during testing. Moreover, we contribute a comprehensive set of strong baselines, derived from OV-3DIS approaches and leveraging 2D Multimodal Large Language Models. To assess the performance of our OE-3DIS system, we introduce a novel Open-Ended score, evaluating both the semantic and geometric quality of predicted masks and their associated class names, alongside the standard AP score. Our approach demonstrates significant performance improvements over the baselines on the ScanNet200 and ScanNet++ datasets. Remarkably, our method surpasses the performance of Open3DIS, the current state-of-the-art method in OV-3DIS, even in the absence of ground-truth object class names.",
    },
    abstract:
      "Introducing the Vocablulary-Free 3D point cloud instance segmentation with different solid baselines and a novel pointwise method using multimodal LLM.",
    absbox: "absPopup2",
  },

  {
    title:
      "Open3DIS: Open-Vocabulary 3D Instance Segmentation with 2D Mask Guidance",
    authors: "<strong class='highlight-name'>Phuc Nguyen*</strong>, Tuan Ngo*, Chuang Gan, Evangelos Kalogerakis, Anh Tran, Cuong Pham, Khoi Nguyen",
    link: "https://open3dis.github.io/",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2024,
    citebox: "popup3",
    image: "assets/images/open3dis.png",
    citation: {
      vancouver:
        "We introduce Open3DIS a novel solution designed to tackle the problem of Open-Vocabulary Instance Segmentation within 3D scenes. Objects within 3D environments exhibit diverse shapes scales and colors making precise instance-level identification a challenging task. Recent advancements in Open-Vocabulary scene understanding have made significant strides in this area by employing class-agnostic 3D instance proposal networks for object localization and learning queryable features for each 3D mask. While these methods produce high-quality instance proposals they struggle with identifying small-scale and geometrically ambiguous objects. The key idea of our method is a new module that aggregates 2D instance masks across frames and maps them to geometrically coherent point cloud regions as high-quality object proposals addressing the above limitations. These are then combined with 3D class-agnostic instance proposals to include a wide range of objects in the real world. To validate our approach we conducted experiments on three prominent datasets including ScanNet200 S3DIS and Replica demonstrating significant performance gains in segmenting objects with diverse categories over the state-of-the-art approaches.",
    },
    abstract:
      "Tackling the open-vocabulary 3D point cloud instance segmentation by using 2D prior.",
    absbox: "absPopup3",
  },

  {
    title:
      "VinMap: Detecting Omissions in Geographic Maps through Computer Vision",
    authors:
      "<strong class='highlight-name'>Phuc Nguyen</strong>, Anh Do, Minh Hoai",
      link: "https://github.com/VinAIResearch/VinMap",
      conferences:
      "International Conference on Multimedia Analysis and Pattern Recognition (MAPR)",
    researchYr: 2024,
    citebox: "popup4",
    image: "assets/images/vinmap.png",
    citation: {
      vancouver:
        "This paper explores the application of computer vision technologies to the analysis of maps, an area with substantial historical, cultural, and political significance. Our focus is on developing and evaluating a method for automatically identifying maps that depict specific regions and feature landmarks with designated names, a task that involves complex challenges due to the diverse styles and methods used in map creation. We address three main subtasks: differentiating maps from non-maps, verifying the accuracy of the region depicted, and confirming the presence or absence of particular landmark names through advanced text recognition techniques. Our approach utilizes a Convolutional Neural Network and transfer learning to differentiate maps from non-maps, verify the accuracy of depicted regions, and confirm landmark names through advanced text recognition. We also introduce the VinMap dataset, containing annotated map images of Vietnam, to train and test our method. Experiments on this dataset demonstrate that our technique achieves F1-score of 85.51% for identifying maps excluding specific territorial landmarks. This result suggests practical utility and indicates areas for future improvement.",
    },
    abstract:
      "(VinAI Research with the Ministry of Information and Communications). The introduction of VinMap dataset utilizing computer vision to identify counterfeit Vietnam geographic maps online.",
    absbox: "absPopup4",
  },

  {
    title: "OpenSUN3D: 2nd Workshop Challenge on Open-Vocabulary 3D Scene Understanding",
    authors: "<strong class='highlight-name'>Phuc Nguyen</strong>, Anh Tran, Cuong Pham, Khoi Nguyen",
    link: "https://opensun3d.github.io/index_cvpr24.html",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops",
    researchYr: 2024,
    citebox: "popup5",
    image: "assets/images/opensun.png",
    citation: {
      vancouver:
        "The ability to perceive, understand and interact with arbitrary 3D environments is a long-standing goal in both academia and industry with applications in AR/VR as well as robotics. Current 3D scene understanding models are largely limited to recognizing a closed set of pre-defined object classes. Recently, large visual-language models, such as CLIP, have demonstrated impressive capabilities trained solely on internet-scale image-language pairs. Some initial works have shown that these models have the potential to extend 3D scene understanding not only to open set recognition, but also offer additional applications such as affordances, materials, activities, and properties of unseen environments. The goal of this workshop is to bundle these siloed efforts and to discuss and establish clear task definitions, evaluation metrics, and benchmark datasets.",
    },
    abstract:
      "VinAI-3DIS has ranked top 1 in Open-Vocabulary 3D instance retrieval track with improved version of Open3DIS.",
    absbox: "absPopup5",
  },

  {
    title: "OpenSUN3D: 1st Workshop Challenge on Open-Vocabulary 3D Scene Understanding",
    authors: "<strong class='highlight-name'>Phuc Nguyen</strong>, Anh Tran, Cuong Pham, Khoi Nguyen",
    link: "https://opensun3d.github.io/index_iccv23.html",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops",
    researchYr: 2023,
    citebox: "popup6",
    image: "assets/images/opensun1.png",
    citation: {
      vancouver:
        "This report provides an overview of the challenge hosted at the OpenSUN3D Workshop on Open-Vocabulary 3D Scene Understanding held in conjunction with ICCV 2023. The goal of this workshop series is to provide a platform for exploration and discussion of open-vocabulary 3D scene understanding tasks, including but not limited to segmentation, detection and mapping. We provide an overview of the challenge hosted at the workshop, present the challenge dataset, the evaluation methodology, and brief descriptions of the winning methods.",
    },
    abstract:
      "VinAI-3DIS has ranked top 2 in Open-Vocabulary 3D instance retrieval track.",
    absbox: "absPopup6",
  },

  {
    title:
      "HA-RDet: Hybrid Anchor Rotation Detector for Oriented Object Detection",
    authors: "<strong class='highlight-name'>Phuc Nguyen</strong>",
    link: "https://arxiv.org/abs/2412.14379",
    conferences:
      "Bachelor's Thesis",
    researchYr: 2022,
    citebox: "popup7",
    image: "assets/images/hardet.png",
    citation: {
      vancouver:
        "Oriented object detection in aerial images poses a significant challenge due to their varying sizes and orientations. Current state-of-the-art detectors typically rely on either two-stage or one-stage approaches, often employing Anchor-based strategies, which can result in computationally expensive operations due to the redundant number of generated anchors during training. In contrast, Anchor-free mechanisms offer faster processing but suffer from a reduction in the number of training samples, potentially impacting detection accuracy. To address these limitations, we propose the Hybrid-Anchor Rotation Detector (HA-RDet), which combines the advantages of both anchor-based and anchor-free schemes for oriented object detection. By utilizing only one preset anchor for each location on the feature maps and refining these anchors with our Orientation-Aware Convolution technique, HA-RDet achieves competitive accuracies, including 75.41 mAP on DOTA-v1, 65.3 mAP on DIOR-R, and 90.2 mAP on HRSC2016, against current anchor-based state-of-the-art methods, while significantly reducing computational resources.",
    },
    abstract:
      "Hybrid-Anchor Rotation Detector (HA-RDet), which combines the advantages of both anchor-based and anchor-free schemes for oriented object detection.",
    absbox: "absPopup7",
  },
  // {
  //   title:
  //     "Forward and Backward Information Retention for Accurate Binary Neural Networks",
  //   authors:
  //     "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
  //     link: "https://arxiv.org/abs/2408.11747",
  //     conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup8",
  //   image: "assets/images/research-page/neuralNetworks.jpg",
  //   citation: {
  //     vancouver:
  //       "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 8",
  //   absbox: "absPopup8",
  // },
];
AOS.init();
// Hàm để đổi màu phần trong ngoặc đơn
function highlightConferenceAcronym(conferenceText) {
  return conferenceText.replace(/\(([^)]+)\)/g, (match, p1) => {
    return `<span class="highlight-acronym">(${p1})</span>`;
  });
}

const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      link,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
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
                    <a href="${link ? link : '#'}" target="_blank" class="paperTitle"> ${title} </a>
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${highlightConferenceAcronym(conferences)} 

                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--BUTTONS-->
<div class="d-flex" style="margin-right:5%;">
    <button class="button button-accent button-small text-right button-summary " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
        SUMMARY
    </button>

    <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
        ABSTRACT
    </button>
</div>

                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
