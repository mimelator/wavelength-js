# wavelength-js

Please visit: https://www.wavelengthjs.com/


```
How to deploy:

Update the site

 aws s3 cp www s3://wavelength-js-2-customresourcestack-s3bucketroot-zqsees98xc13 --recursive

Invalidate:
aws cloudfront create-invalidation --distribution-id E2B218GI7HXANP --paths "/index.html" 


How to deploy:

Documentation: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/getting-started-secure-static-website-cloudformation-template.html

from the current directory

https://github.com/aws-samples/amazon-cloudfront-secure-static-site

aws --region us-east-1 cloudformation package \
    --template-file templates/main.yaml \
    --s3-bucket wavelength-js \
    --output-template-file packaged.template

# Get Host ID: https://us-east-1.console.aws.amazon.com/route53/v2/hostedzones#

aws --region us-east-1 cloudformation deploy \
    --stack-name wavelength-js \
    --template-file packaged.template \
    --capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND \
    --parameter-overrides  DomainName=wavelengthjs.com SubDomain=www HostedZoneId=XXX

```

