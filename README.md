# Pipeline to Shift-left

The purpose of this exercise is to design a pipeline to encourage
clean practices. This exercise uses GitHub workflows to implement an initial pipeline.
Not to solve the problems, but to expose the problems faster -
so that we prevent mistakes in future maintenance too.

The idea is to enable teams to deliver faster, with higher reliability.
Shift-left is about shifting failures 'to the left', closer to development -
so that mistakes are caught early and can be fixed with minimal effort.

Here, 'mistakes' include bugs and also coding-structures
that make maintenance expensive. 

## About this example

This is a nodejs implementation of a patient-monitor record-keeper.
It offers these interfaces:

1. POST patient-monitoring recods
1. GET statistics (minimum and maximum) per parameter.

The code has issues, yet the workflow passes. **Your job is to make the workflow fail by exposing the issues.** 

## Issues that need to be 'shifted left' by the workflow

Here are some of the issues with the implementation. Create a failing workflow for any _two_ of them:

- **Duplication**. The code repeats a check in every interface. The problem here is duplication - an update will trigger multiple modifications. Your workflow must fail due to code-duplication, so that developers would need to address this for the pipe to pass.
- **Coverage**. Error conditions are not covered by the tests. That means an improper error handling will get detected only when the end-user encounters the error. Make a pipe that will fail due to lack of test-coverage.
- **Vulnerabilities**. If a developer adds dependency to a 3rd party npm library that's vulnerable, it goes unnoticed. Build a workflow that will fail on finding a vulnerable dependency.
- **Confidence**. Even when we remove the code to compute the statistics, the tests will pass. The tests do not give confidence. Design a step in the workflow to fail due to 'weak tests'.
- **Documentation**. This file has spelling mistakes. Make a workflow to fail on spelling issues, so that maintainers will realize such mistakes as soon as they push their changes.
- **Staging**. To run this code, we need to follow manual steps - see [instructions](instructions.md). Make a script to set it up on any system, including tests for such a script.
- **Production**. Once the staged software is proven, it needs to be moved to Production. How would you achieve that?

### Non-functional considerations

- **How quickly** can you deliver the failure to a developer? Here the considerations are: Can developers run it while developing, without having to push the code for evaluation all the time? How long does it take to deliver a failure?
- Is it **easy to re-use** these workflows in another GitHub repo? How about another non-GitHub repo?
- Is it **easy to fix** when we notice a mistake or improvement in the workflow? How about deploying these improvements in every repo that uses our workflow?

## Hints and References

Use [GitHub actions](https://docs.github.com/en/actions/quickstart) to make your workflow.
The initial workflow is inside the .github folder. As you can see, it is passing, in spite of several weaknesses in the code.

Your job is to add strength to the workflow - expose the weaknesses by making failing workflows taht show the flaws. This way, we fail fast and enable developers to solve faster.

To show multiple failures, use multiple workflow yml files.
